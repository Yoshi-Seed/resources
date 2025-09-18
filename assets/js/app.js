document.addEventListener('DOMContentLoaded', () => {
    const { resourceCatalog, quickLinks, categoryDefinitions, navigatorFlow } = window.ResourceHub;
    const resourceIndex = new Map(resourceCatalog.map((item) => [item.id, item]));

    const quickLinksContainer = document.getElementById('quick-links');
    const categoryContainer = document.getElementById('resource-categories');
    const navigatorQuestionEl = document.getElementById('navigator-question');
    const navigatorOptionsEl = document.getElementById('navigator-options');
    const navigatorResultEl = document.getElementById('navigator-result');
    const navigatorBreadcrumbsEl = document.getElementById('navigator-breadcrumbs');

    let nodeStack = [navigatorFlow];
    let trail = [];
    let showingResult = false;

    renderQuickLinks();
    renderCategories();
    renderNode(navigatorFlow);

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

    function createResourceItem(resource) {
        const item = document.createElement('article');
        item.className = 'resource-item';

        const title = document.createElement('h4');
        title.className = 'resource-item__title';
        title.innerHTML = `<i class="${getIconClass(resource.type)}"></i> ${resource.title}`;

        const meta = document.createElement('div');
        meta.className = 'resource-item__meta';
        meta.textContent = `${resource.type} ｜ ${resource.tags.join(' / ')}`;

        const description = document.createElement('p');
        description.className = 'resource-item__description';
        description.textContent = resource.description;

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
        path.textContent = resource.drivePath;
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
});
