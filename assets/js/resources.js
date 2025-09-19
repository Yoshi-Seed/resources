const resourceCatalog = [
    {
        id: 'ai-skill-check',
        title: 'AI習得レベル診断',
        description: '現在のAI理解度を簡単にチェックできる自己診断フォーム。研修前後のギャップ把握にも。',
        type: '診断リンク',
        drivePath: 'Google Drive > AI習得レベル診断',
        url: 'https://yoshi-seed.github.io/faq/support/',
        tags: ['診断', 'スタートガイド']
    },
    {
        id: 'ai-guide',
        title: '#シード・プランニング AIガイド',
        description: '社内での生成AI活用に必要な前提知識と全体像をまとめた入門ガイド。初心者から始める生成AI活用の基礎。',
        type: 'PDF',
        drivePath: 'Google Drive > 基本ガイド > シード・プランニング_AIガイド.pdf',
        url: '',
        tags: ['入門', 'ガイド', '基礎']
    },
    {
        id: 'ai-strategy-playbook',
        title: '#シード・プランニング AIツールプレイブック AI Strategic Playbook',
        description: '部署ごとのユースケースや導入ステップを整理したプレイブック。経営・リーダー層向けの戦略的活用ガイド。',
        type: 'PDF',
        drivePath: 'Google Drive > 戦略・プレイブック > シード・プランニング_AIツールプレイブック_AI Strategic Playbook.pdf',
        url: '',
        tags: ['戦略', 'リーダー', 'プレイブック']
    },
    {
        id: 'prompt-collection',
        title: '#コピペ可能 考える・アイデア出し・壁打ち専用便利プロンプト集',
        description: '業務の企画・壁打ちでそのまま使える高品質なプロンプトテンプレート集。コピペですぐに使える実践的なプロンプト。',
        type: 'PDF',
        drivePath: 'Google Drive > プロンプト集 > コピペ可能_考える・アイデア出し・壁打ち専用便利プロンプト集.pdf',
        url: '',
        tags: ['プロンプト', 'テンプレート', 'コピペ']
    },
    {
        id: 'b3-case-studies',
        title: '#B3チームケース紹介資料',
        description: '現場で成果を上げたユースケースをインタビュー形式で紹介。実際の活用事例と効果を詳しく解説。',
        type: 'PDF',
        drivePath: 'Google Drive > 事例・ケーススタディ > B3チームケース紹介資料.pdf',
        url: '',
        tags: ['事例', '共有', 'ケーススタディ']
    },
    {
        id: 'prompt-guide',
        title: '#シード・プランニング AIプロンプト上達のコツ Prompt Guide',
        description: 'プロンプト改善のポイントやチェックリストをまとめたハンズオンガイド。効果的なプロンプト作成の実践的なテクニック。',
        type: 'PDF',
        drivePath: 'Google Drive > プロンプト集 > シード・プランニング_AIプロンプト上達のコツ_Prompt Guide.pdf',
        url: '',
        tags: ['プロンプト', '改善', 'ガイド']
    },
    {
        id: 'prompt-advanced',
        title: '#シード・プランニング AI上級者向けガイド リーダー達へ AI_Strategy_Advanced',
        description: 'リーダー層が押さえておきたい高度活用の戦略視点とガバナンスポイント。組織全体での効果的なAI導入・運用戦略。',
        type: 'PDF',
        drivePath: 'Google Drive > 戦略・プレイブック > シード・プランニング_AI上級者向けガイド_リーダー達へ_AI_Strategy_Advanced.pdf',
        url: '',
        tags: ['戦略', 'リーダー', '上級者']
    },
    {
        id: 'ai-intermediate-manual',
        title: '#シード・プランニング AI中級者向けスキルアップと活用マニュアル',
        description: '現場でAIを使いこなすための実践Tipsと業務フロー事例を収録。中級者向けのスキルアップ指南書。',
        type: 'PDF',
        drivePath: 'Google Drive > 学習パス・マニュアル > シード・プランニング_AI中級者向けスキルアップと活用マニュアル.pdf',
        url: '',
        tags: ['実践', 'マニュアル', '中級者']
    },
    {
        id: 'ai-operations-manual',
        title: '#シード・プランニング 生成AI使用運用マニュアル 2025-08-05',
        description: '社内ポリシー・リスク管理・問い合わせフローを明文化した最新版運用マニュアル。安全で効果的なAI活用のためのガイドライン。',
        type: 'PDF',
        drivePath: 'Google Drive > 運用・ガバナンス > シード・プランニング_生成AI使用運用マニュアル_2025-08-05.pdf',
        url: '',
        tags: ['ガバナンス', 'ルール', '運用']
    },
    {
        id: 'ai-tools-intro',
        title: '#AIツール・導入説明 グループリーダー会議8月7日',
        description: 'リーダー会議で使用した導入説明資料。導入プロセスやサポート体制を解説。組織レベルでの導入計画と推進方法。',
        type: '研修資料',
        drivePath: 'Google Drive > 研修・説明資料 > AIツール・導入説明_グループリーダー会議_20240807.pdf',
        url: '',
        tags: ['導入', 'リーダー', '説明資料']
    },
    {
        id: 'training-folder',
        title: '#ChatGPT研修資料：Google drive へのリンク',
        description: '各バージョンのChatGPT研修スライド・ハンズオン資料をまとめたフォルダ。1.0から6.0まで体系的に整理。',
        type: 'フォルダ',
        drivePath: 'Google Drive > ChatGPT研修資料/',
        url: '',
        tags: ['研修', 'フォルダ', 'ChatGPT']
    },
    {
        id: 'training-1-0',
        title: 'ChatGPT 1.0 スタートアップトレーニング (2025/04/03 v2)',
        description: '基本操作と社内利用例を解説する入門トレーニング資料。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > ChatGPT_1.0_スタートアップトレーニング_20250403_JP v2.pdf',
        url: '',
        tags: ['研修', '基礎']
    },
    {
        id: 'training-2-0',
        title: 'ChatGPT 2.0 メモリー活用トレーニング (2025/04/04)',
        description: 'メモリ機能を活用した業務効率化のユースケースを紹介。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > ChatGPT_2.0_メモリー活用トレーニング_20250404.pdf',
        url: '',
        tags: ['研修', '中級']
    },
    {
        id: 'training-2-2',
        title: 'ChatGPT 2.2 応用編：精度を上げた活用 (2025/04/09 v2)',
        description: 'プロンプト評価と改善プロセスにフォーカスした応用トレーニング。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > ChatGPT_2.2_応用編_精度を上げた活用_20250409_JP v2.pdf',
        url: '',
        tags: ['研修', '応用']
    },
    {
        id: 'training-3-0',
        title: 'ChatGPT 3.0 カスタムGPTトレーニング Project Presentation',
        description: 'カスタムGPTの企画・設計プロセスをハンズオンで学ぶ資料。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > ChatGPT_3.0_カスタムGPTトレーニング_Project Presentation.pdf',
        url: '',
        tags: ['研修', 'カスタムGPT']
    },
    {
        id: 'training-4-0',
        title: 'ChatGPT 4.0 Deep + Research トレーニング',
        description: 'リサーチワークフローにおける高度検索と分析のコツを解説。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > ChatGPT_4.0_Deep+Researchトレーニング.pdf',
        url: '',
        tags: ['研修', 'リサーチ']
    },
    {
        id: 'training-5-0',
        title: 'CustomGPT 5.0 Training Module：Creating your own GPT',
        description: '独自GPT構築に必要な要件整理と設定手順をまとめたモジュール。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_Training > CustomGPT_5.0_Training_Module_Creating your own GPT.pdf',
        url: '',
        tags: ['研修', 'カスタムGPT']
    },
    {
        id: 'training-6-0',
        title: 'ChatGPT 6.0 エージェントモード活用トレーニング',
        description: 'エージェントモードでの自動化シナリオを設計するための上級トレーニング。',
        type: 'PPTX',
        drivePath: 'Google Drive > 02_Training > ChatGPT_6.0_エージェントモード活用トレーニング.pptx',
        url: '',
        tags: ['研修', '上級']
    },

    {
        id: 'font-pack',
        title: 'ChatGPTグラフ文字化け対策用日本語フォント',
        description: 'レポートのグラフ文字化けを防ぐフォントパック。Windows / Mac 両対応。データ可視化での日本語表示問題を解決。',
        type: 'ZIP',
        drivePath: 'Google Drive > サポートツール > ChatGPTグラフ文字化け対策用日本語フォント.zip',
        url: '',
        tags: ['サポート', 'フォント', 'グラフ']
    }
];

const quickLinks = [
    {
        resourceId: 'ai-skill-check',
        icon: 'fa-chart-simple',
        emphasis: 'スキル診断',
        description: 'まずは現在のAI習得レベルを診断し、最適な学習パスを発見。'
    },
    {
        resourceId: 'prompt-collection',
        icon: 'fa-wand-magic-sparkles',
        emphasis: 'プロンプト集',
        description: 'コピペで使える実践プロンプトで今すぐ業務を効率化。'
    },
    {
        resourceId: 'training-folder',
        icon: 'fa-graduation-cap',
        emphasis: 'ChatGPT研修',
        description: '1.0から6.0まで体系的な研修資料でスキルアップ。'
    },
    {
        resourceId: 'ai-operations-manual',
        icon: 'fa-shield-halved',
        emphasis: '運用ガイド',
        description: '安全で効果的なAI活用のための最新ルール。'
    }
];

const categoryDefinitions = [
    {
        id: 'starter',
        title: 'スタートアップ & 基本ガイド',
        icon: 'fa-play-circle',
        description: 'AI活用を始めるための診断、入門ガイド、運用ルール。',
        resourceIds: ['ai-skill-check', 'ai-guide', 'ai-operations-manual']
    },
    {
        id: 'prompts',
        title: '実践プロンプト & テクニック',
        icon: 'fa-wand-magic-sparkles',
        description: 'コピペで使えるプロンプト集と効果的な活用テクニック。',
        resourceIds: ['prompt-collection', 'prompt-guide']
    },
    {
        id: 'training',
        title: 'ChatGPT 研修シリーズ（1.0〜6.0）',
        icon: 'fa-graduation-cap',
        description: '基礎から高度活用まで、レベル別の体系的な研修コンテンツ。',
        resourceIds: ['training-folder', 'training-1-0', 'training-2-0', 'training-2-2', 'training-3-0', 'training-4-0', 'training-5-0', 'training-6-0']
    },
    {
        id: 'strategy',
        title: '戦略・リーダーシップ & 組織導入',
        icon: 'fa-chess-knight',
        description: '経営層・リーダー向けの戦略資料と組織導入ガイド。',
        resourceIds: ['ai-strategy-playbook', 'prompt-advanced', 'ai-tools-intro', 'ai-intermediate-manual']
    },
    {
        id: 'showcase',
        title: '活用事例 & サポートツール',
        icon: 'fa-lightbulb',
        description: '実際の成功事例、トラブルシューティング、便利ツール。',
        resourceIds: ['b3-case-studies', 'font-pack']
    }
];

const navigatorFlow = {
    question: '何をお探しですか？',
    subtitle: '目的に応じて最適なリソースをご案内します',
    options: [
        {
            label: 'まずは現在地を把握したい',
            description: 'AI習得レベル診断で自分の立ち位置を確認し、適切な学習パスを見つけたい',
            icon: 'fa-chart-simple',
            resources: ['ai-skill-check', 'ai-guide'],
            resultMessage: 'まずはこちらで現在のスキルレベルを診断し、基本ガイドで全体像を掴みましょう。'
        },
        {
            label: 'ChatGPT研修で体系的に学びたい',
            description: 'レベル別・テーマ別に整理されたChatGPT研修資料で段階的にスキルアップしたい',
            icon: 'fa-graduation-cap',
            next: {
                question: 'どの研修コンテンツから始めますか？',
                options: [
                    {
                        label: '基礎から始めたい（1.0〜2.2）',
                        description: 'ChatGPTの基本操作からメモリ活用、精度向上まで段階的に習得',
                        resources: ['training-1-0', 'training-2-0', 'training-2-2'],
                        resultMessage: 'この順序で進めることで、基礎から応用まで確実にスキルが身につきます。'
                    },
                    {
                        label: 'カスタムGPTを作りたい（3.0〜5.0）',
                        description: '独自のGPTを設計・構築し、より高度な活用を実現',
                        resources: ['training-3-0', 'training-5-0'],
                        resultMessage: 'カスタムGPTの企画から実装まで、実践的なスキルを習得できます。'
                    },
                    {
                        label: 'リサーチ・分析に活用したい（4.0）',
                        description: '調査業務や深い分析作業でChatGPTを効果的に活用',
                        resources: ['training-4-0', 'prompt-guide'],
                        resultMessage: 'リサーチワークフローが飛躍的に向上する実践的テクニックを学べます。'
                    },
                    {
                        label: '最新の自動化技術を学びたい（6.0）',
                        description: 'エージェントモードで業務の自動化シナリオを設計',
                        resources: ['training-6-0', 'ai-intermediate-manual'],
                        resultMessage: '上級者向けの自動化技術で業務効率を劇的に改善できます。'
                    },
                    {
                        label: '全研修資料をまとめて見たい',
                        description: '研修フォルダで全コンテンツを一覧し、必要な資料を選択',
                        resources: ['training-folder'],
                        resultMessage: 'Google Driveの研修フォルダで全資料にアクセスできます。'
                    }
                ]
            }
        },
        {
            label: 'すぐに使えるプロンプトが欲しい',
            description: '実務でそのまま使える高品質なプロンプトテンプレートを活用したい',
            icon: 'fa-wand-magic-sparkles',
            resources: ['prompt-collection', 'prompt-guide'],
            resultMessage: 'コピペで使える実践的プロンプト集と、効果的な改善ガイドをご活用ください。'
        },
        {
            label: 'リーダーとして組織導入を検討したい',
            description: 'チーム・部署レベルでの戦略策定、ルール整備、成功事例の共有を進めたい',
            icon: 'fa-users-gear',
            next: {
                question: 'どの側面を重視していますか？',
                options: [
                    {
                        label: '戦略・ユースケースの整理',
                        description: '部署別活用方針や導入ロードマップの策定',
                        resources: ['ai-strategy-playbook', 'prompt-advanced'],
                        resultMessage: '組織的なAI活用戦略と高度な活用ガイドで方針を固められます。'
                    },
                    {
                        label: 'ガバナンス・運用ルールの整備',
                        description: '社内ポリシー、リスク管理、運用フローの構築',
                        resources: ['ai-operations-manual', 'ai-tools-intro'],
                        resultMessage: '最新の運用マニュアルと導入説明資料で安全な活用基盤を構築できます。'
                    },
                    {
                        label: '成功事例でチームの啓発',
                        description: '他部署の取り組み成果をチームメンバーに共有',
                        resources: ['b3-case-studies', 'ai-intermediate-manual'],
                        resultMessage: '実際の成功事例と実践マニュアルでチームのモチベーションを高められます。'
                    }
                ]
            }
        },
        {
            label: 'トラブル解決・サポートを受けたい',
            description: '日常利用での困りごと解決や、技術的なサポートリソースを探している',
            icon: 'fa-life-ring',
            resources: ['font-pack', 'prompt-guide', 'ai-intermediate-manual'],
            resultMessage: 'グラフ文字化け対策、プロンプト改善ガイド、実践マニュアルで課題を解決できます。'
        }
    ]
};

window.ResourceHub = {
    resourceCatalog,
    quickLinks,
    categoryDefinitions,
    navigatorFlow
};
