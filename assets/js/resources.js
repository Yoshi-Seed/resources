const resourceCatalog = [
    {
        id: 'ai-skill-check',
        title: 'AI習得レベル診断',
        description: '現在のAI理解度を簡単にチェックできる自己診断フォーム。研修前後のギャップ把握にも。',
        type: '診断リンク',
        drivePath: 'Google Drive > 00_Onboarding > AI習得レベル診断（フォーム）',
        url: '',
        tags: ['診断', 'スタートガイド']
    },
    {
        id: 'ai-guide',
        title: 'シード・プランニング AIガイド',
        description: '社内での生成AI活用に必要な前提知識と全体像をまとめた入門ガイド。',
        type: 'PDF',
        drivePath: 'Google Drive > 01_Guides > シード・プランニング AIガイド.pdf',
        url: '',
        tags: ['入門', 'ガイド']
    },
    {
        id: 'ai-strategy-playbook',
        title: 'AIツールプレイブック / AI Strategic Playbook',
        description: '部署ごとのユースケースや導入ステップを整理したプレイブック。経営・リーダー層向け。',
        type: 'PDF',
        drivePath: 'Google Drive > 01_Guides > AIツールプレイブック_AI Strategic Playbook.pdf',
        url: '',
        tags: ['戦略', 'リーダー']
    },
    {
        id: 'prompt-collection',
        title: '考える・アイデア出し・壁打ち専用便利プロンプト集',
        description: '業務の企画・壁打ちでそのまま使える高品質なプロンプトテンプレート集。',
        type: 'PDF',
        drivePath: 'Google Drive > 03_PromptLibrary > 考える・アイデア出し・壁打ち専用便利プロンプト集.pdf',
        url: '',
        tags: ['プロンプト', 'テンプレート']
    },
    {
        id: 'prompt-guide',
        title: 'AIプロンプト上達のコツ | Prompt Guide',
        description: 'プロンプト改善のポイントやチェックリストをまとめたハンズオンガイド。',
        type: 'PDF',
        drivePath: 'Google Drive > 03_PromptLibrary > Prompt Guide.pdf',
        url: '',
        tags: ['プロンプト', '改善']
    },
    {
        id: 'prompt-advanced',
        title: 'AI上級者向けガイド | AI Strategy Advanced',
        description: 'リーダー層が押さえておきたい高度活用の戦略視点とガバナンスポイント。',
        type: 'PDF',
        drivePath: 'Google Drive > 04_Strategy > AI_Strategy_Advanced.pdf',
        url: '',
        tags: ['戦略', 'リーダー']
    },
    {
        id: 'ai-intermediate-manual',
        title: 'AI中級者向けスキルアップと活用マニュアル',
        description: '現場でAIを使いこなすための実践Tipsと業務フロー事例を収録。',
        type: 'PDF',
        drivePath: 'Google Drive > 02_LearningPaths > AI中級者向けスキルアップと活用マニュアル.pdf',
        url: '',
        tags: ['実践', 'マニュアル']
    },
    {
        id: 'ai-operations-manual',
        title: '生成AI使用運用マニュアル（2025-08-05版）',
        description: '社内ポリシー・リスク管理・問い合わせフローを明文化した最新版運用マニュアル。',
        type: 'PDF',
        drivePath: 'Google Drive > 05_Governance > 生成AI使用運用マニュアル_2025-08-05.pdf',
        url: '',
        tags: ['ガバナンス', 'ルール']
    },
    {
        id: 'ai-tools-intro',
        title: 'AIツール・導入説明（グループリーダー会議 8月7日）',
        description: 'リーダー会議で使用した導入説明資料。導入プロセスやサポート体制を解説。',
        type: 'PDF',
        drivePath: 'Google Drive > 05_Governance > AIツール導入説明_グループリーダー会議_20240807.pdf',
        url: '',
        tags: ['導入', 'リーダー']
    },
    {
        id: 'training-folder',
        title: 'ChatGPT研修資料（Google Drive フォルダ）',
        description: '各バージョンのChatGPT研修スライド・ハンズオン資料をまとめたフォルダ。',
        type: 'フォルダ',
        drivePath: 'Google Drive > 02_Training > ChatGPT研修資料/',
        url: '',
        tags: ['研修', 'フォルダ']
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
        id: 'b3-case-studies',
        title: 'B3チームケース紹介資料',
        description: '現場で成果を上げたユースケースをインタビュー形式で紹介。',
        type: 'PDF',
        drivePath: 'Google Drive > 06_Showcase > B3チームケース紹介資料.pdf',
        url: '',
        tags: ['事例', '共有']
    },
    {
        id: 'font-pack',
        title: 'ChatGPTグラフ文字化け対策用日本語フォント',
        description: 'レポートのグラフ文字化けを防ぐフォントパック。Windows / Mac 両対応。',
        type: 'ZIP',
        drivePath: 'Google Drive > 07_Support > ChatGPTグラフ文字化け対策用日本語フォント.zip',
        url: '',
        tags: ['サポート', 'フォント']
    }
];

const quickLinks = [
    {
        resourceId: 'ai-skill-check',
        icon: 'fa-chart-simple',
        emphasis: '診断',
        description: '学習前の現状を数分で自己診断。結果は上長と共有可能。'
    },
    {
        resourceId: 'ai-guide',
        icon: 'fa-book-open',
        emphasis: '入門',
        description: '生成AIの基本と社内ルールをおさらい。まずはここから。'
    },
    {
        resourceId: 'prompt-collection',
        icon: 'fa-wand-magic-sparkles',
        emphasis: 'プロンプト',
        description: 'すぐ使えるテンプレートでアウトプットの質を向上。'
    },
    {
        resourceId: 'training-folder',
        icon: 'fa-graduation-cap',
        emphasis: '研修',
        description: '全研修スライドのフォルダをまとめて開く。'
    }
];

const categoryDefinitions = [
    {
        id: 'starter',
        title: 'スタートガイド / ガバナンス',
        icon: 'fa-compass-drafting',
        description: '全体像の理解と運用ルールを知りたい方向けの資料。',
        resourceIds: ['ai-skill-check', 'ai-guide', 'ai-strategy-playbook', 'ai-intermediate-manual', 'ai-operations-manual', 'ai-tools-intro']
    },
    {
        id: 'prompts',
        title: 'プロンプトテンプレートと実践ノウハウ',
        icon: 'fa-keyboard',
        description: '明日から使えるプロンプトテンプレートと改善ガイド。',
        resourceIds: ['prompt-collection', 'prompt-guide']
    },
    {
        id: 'training',
        title: 'ChatGPT 研修シリーズ',
        icon: 'fa-chalkboard-user',
        description: 'レベル別の研修資料をまとめてチェックできます。',
        resourceIds: ['training-folder', 'training-1-0', 'training-2-0', 'training-2-2', 'training-3-0', 'training-4-0', 'training-5-0', 'training-6-0']
    },
    {
        id: 'strategy',
        title: 'リーダー / 戦略視点の資料',
        icon: 'fa-chess-knight',
        description: '経営・プロジェクトリード向けの高度活用ガイド。',
        resourceIds: ['ai-strategy-playbook', 'prompt-advanced', 'training-3-0', 'training-5-0', 'ai-tools-intro']
    },
    {
        id: 'showcase',
        title: '活用事例・サポートリソース',
        icon: 'fa-life-ring',
        description: '成功事例の共有と日常活用を支援するリソース。',
        resourceIds: ['b3-case-studies', 'font-pack', 'prompt-collection']
    }
];

const navigatorFlow = {
    question: 'まず、目的を教えてください。',
    options: [
        {
            label: '自分のスキルレベルを把握したい',
            description: '研修前の準備や目標設定のために、現在地を確認したい方向け。',
            resources: ['ai-skill-check', 'ai-guide']
        },
        {
            label: '研修資料から学びたい',
            description: 'レベルやテーマ別に ChatGPT 研修資料を探します。',
            next: {
                question: 'どの研修テーマに興味がありますか？',
                options: [
                    {
                        label: '基礎〜日常業務で活用したい',
                        description: 'ChatGPTの基本操作から応用まで段階的に学びたい。',
                        resources: ['training-1-0', 'training-2-0', 'training-2-2']
                    },
                    {
                        label: 'カスタムGPTや自動化を進めたい',
                        description: '高度な設計やエージェント活用に踏み込みたい方向け。',
                        resources: ['training-3-0', 'training-5-0', 'training-6-0']
                    },
                    {
                        label: '調査・分析ワークに活かしたい',
                        description: 'リサーチの深堀りや資料作成の質向上を目指す。',
                        resources: ['training-4-0', 'prompt-guide']
                    },
                    {
                        label: 'まとめてフォルダで確認したい',
                        description: '全研修資料を一括で閲覧したい方向け。',
                        resources: ['training-folder']
                    }
                ]
            }
        },
        {
            label: 'すぐ使えるプロンプトを知りたい',
            description: '壁打ちやアイデア出しをスピードアップしたいときに。',
            resources: ['prompt-collection', 'prompt-guide']
        },
        {
            label: 'チームをリードする立場として整理したい',
            description: '部署導入やポリシー整備を検討しているリーダー向け。',
            next: {
                question: 'どのテーマを重視していますか？',
                options: [
                    {
                        label: '導入・運用ルールを整備したい',
                        description: 'ガバナンスと社内展開の基礎資料。',
                        resources: ['ai-operations-manual', 'ai-tools-intro']
                    },
                    {
                        label: '戦略・ユースケースを整理したい',
                        description: '組織的な活用方針を固めるためのプレイブック。',
                        resources: ['ai-strategy-playbook', 'prompt-advanced']
                    },
                    {
                        label: '成功事例をチームに共有したい',
                        description: '他部署の取り組みや効果を紹介。',
                        resources: ['b3-case-studies']
                    }
                ]
            }
        },
        {
            label: 'トラブル対策やサポート資料を探したい',
            description: '日常利用で困ったときのヘルプリソース。',
            resources: ['font-pack', 'prompt-guide', 'ai-intermediate-manual']
        }
    ]
};

window.ResourceHub = {
    resourceCatalog,
    quickLinks,
    categoryDefinitions,
    navigatorFlow
};
