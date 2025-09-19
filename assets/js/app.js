document.addEventListener('DOMContentLoaded', () => {
    const { resourceCatalog, quickLinks, categoryDefinitions, navigatorFlow } = window.ResourceHub;
    const resourceIndex = new Map(resourceCatalog.map((item) => [item.id, item]));

    const quickLinksContainer = document.getElementById('quick-links');
    const categoryContainer = document.getElementById('resource-categories');
    const navigatorQuestionEl = document.getElementById('navigator-question');
    const navigatorOptionsEl = document.getElementById('navigator-options');
    const navigatorResultEl = document.getElementById('navigator-result');
    const navigatorBreadcrumbsEl = document.getElementById('navigator-breadcrumbs');
    const searchInputEl = document.getElementById('resource-search-input');
    const searchResultsEl = document.getElementById('resource-search-results');
    const searchEmptyEl = document.getElementById('resource-search-empty');
    const searchTagsEl = document.getElementById('resource-search-tags');
    const searchClearBtn = document.getElementById('resource-search-clear');

    let nodeStack = [navigatorFlow];
    let trail = [];
    let showingResult = false;
    let activeTag = null;

    renderQuickLinks();
    renderCategories();
    renderNode(navigatorFlow);
    initSearch();

    function renderQuickLinks() {
        quickLinks.forEach((link) => {
            const resource = resourceIndex.get(link.resourceId);
            if (!resource) return;
            const card = document.createElement('article');
            card.className = 'quick-card';

            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'quick-card__icon';
            iconWrapper.innerHTML = `<i class="fa-solid ${link.icon}"></i>`;

            const emphasis = document.createElement('p');
            emphasis.className = 'quick-card__title';
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = link.emphasis;
            const titleText = document.createElement('span');
            titleText.className = 'quick-card__title-text';
            titleText.textContent = resource.title;
            emphasis.append(badge, titleText);

            const description = document.createElement('p');
            description.className = 'quick-card__description';
            description.textContent = link.description;

            const path = document.createElement('div');
            path.className = 'resource-item__path';
            path.textContent = resource.drivePath;

            const actions = document.createElement('div');
            actions.className = 'resource-item__actions';
            if (resource.url) {
                const linkEl = document.createElement('a');
                linkEl.className = 'quick-card__link';
                linkEl.href = resource.url;
                linkEl.target = '_blank';
                linkEl.rel = 'noopener';
                linkEl.textContent = 'Driveで開く';
                actions.appendChild(linkEl);
            }
            actions.appendChild(createCopyButton(resource.drivePath));

            card.append(iconWrapper, emphasis, description, path, actions);
            quickLinksContainer.appendChild(card);
        });
    }

    function renderCategories() {
        categoryDefinitions.forEach((category) => {
            const card = document.createElement('article');
            card.className = 'category-card';

            const header = document.createElement('div');
            header.className = 'category-card__header';
            header.innerHTML = `
                <div class="category-card__icon"><i class="fa-solid ${category.icon}"></i></div>
                <div>
                    <h3 class="category-card__title">${category.title}</h3>
                    <p class="category-card__description">${category.description}</p>
                </div>
            `;

            const list = document.createElement('ul');
            category.resourceIds.forEach((id) => {
                const resource = resourceIndex.get(id);
                if (!resource) return;
                const item = document.createElement('li');
                item.innerHTML = `<strong>${resource.title}</strong> — ${resource.description}`;
                list.appendChild(item);
            });

            card.append(header, list);
            categoryContainer.appendChild(card);
        });
    }

    function initSearch() {
        if (!searchInputEl || !searchResultsEl || !searchEmptyEl || !searchTagsEl) {
            return;
        }

        const tagSet = new Set();
        resourceCatalog.forEach((resource) => {
            (resource.tags || []).forEach((tag) => tagSet.add(tag));
        });

        Array.from(tagSet)
            .sort((a, b) => a.localeCompare(b, 'ja'))
            .forEach((tag) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'finder__tag';
                button.dataset.tag = tag;
                button.textContent = `#${tag}`;
                button.setAttribute('aria-pressed', 'false');
                button.addEventListener('click', () => {
                    activeTag = activeTag === tag ? null : tag;
                    updateTagButtons();
                    updateSearchResults();
                });
                searchTagsEl.appendChild(button);
            });

        searchInputEl.addEventListener('input', () => {
            updateSearchResults();
        });

        if (searchClearBtn) {
            searchClearBtn.addEventListener('click', () => {
                if (!searchInputEl.value && !activeTag) return;
                searchInputEl.value = '';
                activeTag = null;
                updateTagButtons();
                updateSearchResults();
                searchInputEl.focus();
            });
        }

        updateTagButtons();
        updateSearchResults();
    }

    function updateSearchResults() {
        if (!searchInputEl || !searchResultsEl || !searchEmptyEl) {
            return;
        }

        const rawQuery = (searchInputEl.value || '').trim();
        const terms = rawQuery.length ? rawQuery.split(/\s+/).map((word) => word.toLowerCase()) : [];
        const hasTag = Boolean(activeTag);
        const hasQuery = terms.length > 0;

        if (!hasQuery && !hasTag) {
            searchResultsEl.innerHTML = '';
            searchEmptyEl.textContent = '検索キーワード、またはタグを選択するとおすすめ資料が表示されます。';
            searchEmptyEl.classList.remove('is-hidden');
            if (searchClearBtn) {
                searchClearBtn.classList.remove('is-visible');
            }
            return;
        }

        const results = resourceCatalog.filter((resource) => {
            if (hasTag && !(resource.tags || []).includes(activeTag)) {
                return false;
            }
            return matchesSearchTerms(resource, terms);
        });

        searchResultsEl.innerHTML = '';
        if (!results.length) {
            searchEmptyEl.textContent = '該当する資料が見つかりませんでした。キーワードやタグを変えてみてください。';
            searchEmptyEl.classList.remove('is-hidden');
        } else {
            searchEmptyEl.classList.add('is-hidden');

            const summary = document.createElement('p');
            summary.className = 'finder__count';
            const context = [];
            if (hasTag) {
                context.push(`#${activeTag}`);
            }
            if (hasQuery) {
                context.push(`"${rawQuery}"`);
            }
            const contextText = context.length ? `（${context.join(' / ')}）` : '';
            summary.textContent = `${results.length}件ヒットしました${contextText}`;
            searchResultsEl.appendChild(summary);

            const list = document.createElement('div');
            list.className = 'resource-list';
            list.setAttribute('role', 'list');

            results.forEach((resource) => {
                list.appendChild(
                    createResourceItem(resource, {
                        compact: true,
                        highlightTerms: terms,
                        emphasizeTag: activeTag
                    })
                );
            });

            searchResultsEl.appendChild(list);
        }

        if (searchClearBtn) {
            const shouldShow = hasQuery || hasTag;
            searchClearBtn.classList.toggle('is-visible', shouldShow);
        }
    }

    function updateTagButtons() {
        if (!searchTagsEl) return;
        const buttons = searchTagsEl.querySelectorAll('button[data-tag]');
        buttons.forEach((button) => {
            const tag = button.dataset.tag;
            const isActive = activeTag === tag;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    function matchesSearchTerms(resource, terms) {
        if (!terms.length) return true;
        const searchable = [
            resource.title,
            resource.description,
            resource.drivePath,
            resource.type,
            ...(resource.tags || [])
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        return terms.every((term) => searchable.includes(term));
    }

    function renderNode(node) {
        showingResult = false;
        navigatorQuestionEl.innerHTML = `<h3>${node.question}</h3>`;
        navigatorOptionsEl.innerHTML = '';
        navigatorResultEl.classList.remove('is-visible');
        navigatorResultEl.innerHTML = '';
        renderBreadcrumbs();

        node.options.forEach((option) => {
            const optionEl = document.createElement('button');
            optionEl.type = 'button';
            optionEl.className = 'navigator-option';
            optionEl.setAttribute('role', 'listitem');
            optionEl.innerHTML = `
                <span class="navigator-option__label">${option.label}</span>
                ${option.description ? `<span class="navigator-option__description">${option.description}</span>` : ''}
            `;
            optionEl.addEventListener('click', () => handleOption(option));
            navigatorOptionsEl.appendChild(optionEl);
        });
    }

    function handleOption(option) {
        if (option.next) {
            nodeStack.push(option.next);
            trail.push(option.label);
            renderNode(option.next);
            return;
        }

        if (option.resources) {
            trail.push(option.label);
            renderResources(option.resources, option.label);
        }
    }

    function renderResources(resourceIds, label) {
        showingResult = true;
        renderBreadcrumbs();

        navigatorQuestionEl.innerHTML = `
            <h3>${label} のためにおすすめのリソース</h3>
            <p>下記のDriveパスをコピーしてアクセスしてください。</p>
        `;
        navigatorOptionsEl.innerHTML = '';

        const list = document.createElement('div');
        list.className = 'resource-list';
        list.setAttribute('role', 'list');
        resourceIds.forEach((id) => {
            const resource = resourceIndex.get(id);
            if (!resource) return;
            list.appendChild(createResourceItem(resource));
        });

        navigatorResultEl.innerHTML = '';
        navigatorResultEl.appendChild(list);
        navigatorResultEl.classList.add('is-visible');
    }

    function renderBreadcrumbs() {
        navigatorBreadcrumbsEl.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'breadcrumbs';

        const backNeeded = showingResult || nodeStack.length > 1;
        if (backNeeded) {
            const backBtn = document.createElement('button');
            backBtn.type = 'button';
            backBtn.className = 'navigator__back-btn';
            backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> 戻る';
            backBtn.addEventListener('click', goBack);
            navigatorBreadcrumbsEl.appendChild(backBtn);
        }

        const startCrumb = document.createElement('span');
        startCrumb.className = 'breadcrumb';
        startCrumb.textContent = 'スタート';
        wrapper.appendChild(startCrumb);

        trail.forEach((label) => {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb__separator';
            separator.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            wrapper.appendChild(separator);

            const crumb = document.createElement('span');
            crumb.className = 'breadcrumb';
            crumb.textContent = label;
            wrapper.appendChild(crumb);
        });

        navigatorBreadcrumbsEl.appendChild(wrapper);
    }

    function goBack() {
        if (showingResult) {
            showingResult = false;
            trail.pop();
            navigatorResultEl.classList.remove('is-visible');
            navigatorResultEl.innerHTML = '';
            renderNode(nodeStack[nodeStack.length - 1]);
            return;
        }

        if (nodeStack.length > 1) {
            nodeStack.pop();
            trail.pop();
            renderNode(nodeStack[nodeStack.length - 1]);
        } else {
            renderNode(nodeStack[0]);
        }
    }

    function createResourceItem(resource, options = {}) {
        const { compact = false, highlightTerms = [], emphasizeTag = null } = options;
        const normalizedHighlights = Array.from(
            new Set((highlightTerms || []).map((term) => term.toLowerCase()))
        );

        const item = document.createElement('article');
        item.className = 'resource-item';
        item.setAttribute('role', 'listitem');
        if (compact) {
            item.classList.add('resource-item--compact');
        }

        const title = document.createElement('h4');
        title.className = 'resource-item__title';

        const icon = document.createElement('i');
        icon.className = getIconClass(resource.type);
        title.appendChild(icon);

        const titleText = document.createElement('span');
        titleText.className = 'resource-item__title-text';
        titleText.innerHTML = highlightText(resource.title, normalizedHighlights);
        title.appendChild(titleText);

        const meta = document.createElement('div');
        meta.className = 'resource-item__meta';

        const typeEl = document.createElement('span');
        typeEl.className = 'resource-item__type';
        typeEl.innerHTML = highlightText(resource.type, normalizedHighlights);
        meta.appendChild(typeEl);

        if (resource.tags && resource.tags.length) {
            const tagsWrapper = document.createElement('div');
            tagsWrapper.className = 'resource-item__taglist';

            resource.tags.forEach((tag) => {
                const tagEl = document.createElement('span');
                tagEl.className = 'resource-item__tag';
                tagEl.textContent = tag;

                if (emphasizeTag && tag === emphasizeTag) {
                    tagEl.classList.add('is-active');
                }

                if (normalizedHighlights.some((term) => term && tag.toLowerCase().includes(term))) {
                    tagEl.classList.add('has-highlight');
                }

                tagsWrapper.appendChild(tagEl);
            });

            meta.appendChild(tagsWrapper);
        }

        const description = document.createElement('p');
        description.className = 'resource-item__description';
        description.innerHTML = highlightText(resource.description, normalizedHighlights);

        const actions = document.createElement('div');
        actions.className = 'resource-item__actions';

        if (resource.url) {
            const link = document.createElement('a');
            link.className = 'resource-item__link';
            link.href = resource.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i> Driveで開く';
            actions.appendChild(link);
        }

        const path = document.createElement('span');
        path.className = 'resource-item__path';
        path.innerHTML = highlightText(resource.drivePath, normalizedHighlights);
        actions.appendChild(path);

        actions.appendChild(createCopyButton(resource.drivePath));

        item.append(title, meta, description, actions);
        return item;
    }

    function createCopyButton(text) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'copy-btn';
        button.innerHTML = '<i class="fa-regular fa-copy"></i> パスをコピー';
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(text);
                button.classList.add('is-success');
                button.innerHTML = '<i class="fa-solid fa-check"></i> コピーしました';
                setTimeout(() => {
                    button.classList.remove('is-success');
                    button.innerHTML = '<i class="fa-regular fa-copy"></i> パスをコピー';
                }, 2000);
            } catch (error) {
                button.classList.remove('is-success');
                button.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> コピーできません';
                setTimeout(() => {
                    button.innerHTML = '<i class="fa-regular fa-copy"></i> パスをコピー';
                }, 2000);
            }
        });
        return button;
    }

    function getIconClass(type) {
        const normalized = (type || '').toLowerCase();
        if (normalized.includes('pdf')) return 'fa-regular fa-file-pdf';
        if (normalized.includes('ppt')) return 'fa-regular fa-file-powerpoint';
        if (normalized.includes('zip')) return 'fa-regular fa-file-zipper';
        if (normalized.includes('フォルダ')) return 'fa-regular fa-folder-open';
        if (normalized.includes('診断')) return 'fa-solid fa-list-check';
        return 'fa-regular fa-file-lines';
    }

    function highlightText(text, terms) {
        const source = text == null ? '' : String(text);
        const normalizedTerms = Array.from(
            new Set((terms || []).filter(Boolean).map((term) => term.toLowerCase()))
        );

        if (!normalizedTerms.length) {
            return escapeHtml(source);
        }

        const escapedTerms = normalizedTerms.map(escapeRegExp).filter(Boolean);
        if (!escapedTerms.length) {
            return escapeHtml(source);
        }

        const pattern = `(${escapedTerms.join('|')})`;
        const regex = new RegExp(pattern, 'gi');
        const fragments = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(source)) !== null) {
            if (match.index > lastIndex) {
                fragments.push(escapeHtml(source.slice(lastIndex, match.index)));
            }
            fragments.push(`<mark>${escapeHtml(match[0])}</mark>`);
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < source.length) {
            fragments.push(escapeHtml(source.slice(lastIndex)));
        }

        if (!fragments.length) {
            return escapeHtml(source);
        }

        return fragments.join('');
    }

    function escapeRegExp(str) {
        return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\$&');
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, (char) => {
            switch (char) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case "'":
                    return '&#39;';
                default:
                    return char;
            }
        });
    }
});
