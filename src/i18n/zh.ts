import type { en } from './en';

export const zh = {
  site: {
    brand: 'Toolipie',
    githubRepository: 'GitHub',
    githubAria: 'GitHub 代码仓库',
    metadata: {
      title: 'Toolipie - 面向任务的小工具 CLI',
      description:
        'Toolipie 是一个面向任务的 CLI，用来运行小而可复用的工具。简单、可靠、可扩展；需要时可以使用本地代码，也可以接入你自己的 API。',
    },
  },
  nav: {
    links: {
      useCases: '使用场景',
      howItWorks: '工作方式',
      contribute: '贡献工具',
      about: '关于',
    },
    switcher: {
      en: 'EN',
      zh: '中文',
      toEn: '切换到英文',
      toZh: '切换到中文',
    },
    menu: {
      open: '打开菜单',
      close: '关闭菜单',
    },
  },
  theme: {
    toggle: '切换主题',
    light: '浅色',
    dark: '深色',
  },
  footer: {
    copyrightPrefix: '©',
  },
  terminal: {
    titleSuffix: '终端',
    processed: '已处理',
    labels: {
      docx: 'MD -> DOCX',
      pdfPng: 'PDF -> PNG',
      total: '总计',
    },
  },
  pages: {
    home: {
      metadata: {
        title: 'Toolipie - 面向任务的小工具 CLI',
        description:
          'Toolipie 是一个小型开源 CLI，用来运行简单、可复用的小工具，让面向任务的工作可以稳定重复。',
      },
      hero: {
        headlineLine1: '别再重复写零散小脚本。',
        headlineLine2: '把面向任务的工作变成可复用流程。',
        intro:
          'Toolipie 是一个小型开源 CLI，用来运行简单、可复用的小工具。它帮你把真正有效的代码放在同一个地方，并用同一种方式反复运行。需要本地代码就用本地代码；接入你自己的 API（包括 AI）能得到更好结果时，也可以直接接入。',
        primaryCta: '工作方式',
        secondaryCta: '查看使用场景',
      },
      story: {
        heading: '项目起点',
        body:
          '这个项目来自一个习惯：为很小的任务写很小的脚本，散落在不同项目里，下次需要时又凭记忆重写。Toolipie 是整理这些任务的地方。每个工具都是一个小而模块化的插件，有清晰的输入和输出；CLI 统一它们的运行方式，让你今天、下个月、下一个项目都能继续依赖它们。',
      },
      vision: {
        heading: '愿景',
        body:
          'Toolipie 关注结果：小工具、单一任务、稳定完成。如果 API 或 AI 能产生更好的输出，就使用它；如果本地代码最快，就使用本地代码。工具保持模块化，外层封装让运行方式保持可预测。',
      },
      principles: {
        heading: '原则',
        body:
          '保持简单。优先使用可预测的输入和输出。让可重复的工作流容易运行、容易分享。只在能提升质量时接入外部服务。',
      },
      example: {
        heading: '一个小例子',
        body: '用一个已验证的工具把 Markdown 转成 PDF。输入进去，输出出来，每次都一样。',
        code: `# 把文件放在 ./input/md-to-pdf
# 通过 CLI 运行工具
# 输出会写入 ./output/md-to-pdf

toolipie run md-to-pdf --input ./input/md-to-pdf --output ./output/md-to-pdf`,
      },
      who: {
        heading: '适合谁',
        body:
          '适合所有经常为重复任务重写小脚本的人：工程师、研究者、独立开发者。如果这段代码对我有用，它也应该能被别人复用。这就是工具模块化、欢迎贡献的原因。',
      },
      cta: {
        contribute: '贡献一个工具',
        about: '了解这个项目',
      },
    },
    useCases: {
      metadata: {
        title: '使用场景 - Toolipie',
        description:
          '了解 Toolipie 在文档、文本、图片、OCR、实用工具和数据工作流中的常见使用场景。',
      },
      heading: '使用场景',
      intro:
        'Toolipie 收集的是小而面向任务的工具，让你每次都能用同一种方式运行。下面是一些在项目里经常反复出现的场景。',
      sections: [
        {
          heading: '文档与文本',
          body:
            '在格式之间转换、清理文本，或提取结构化数据。把转换过程做成确定性的流程，之后才能放心复用结果。',
          bullets: [
            'markdown <-> docx/pdf',
            '从 PDF 提取表格 -> CSV',
            '清理换行；规范空白字符',
          ],
        },
        {
          heading: '图片与 OCR',
          body:
            '先把图片标准化，方便后续分析或识别，再交给 OCR 或 AI 步骤处理。',
          bullets: [
            'pdf -> png，并固定 DPI',
            '为 OCR 预处理 png（校正倾斜/降噪）',
            '生成缩略图或联系表',
          ],
        },
        {
          heading: '实用工具与数据',
          body: '清理、合并并准备数据，方便后续处理。任务保持小而可组合。',
          bullets: [
            '拆分/合并大型 CSV；去重行',
            '批量重命名/标记文件',
            '使用自己的 API key 做 AI 辅助批处理',
          ],
        },
      ],
      closing: '目前已经包含四个工具，后续会继续增加。',
    },
    howItWorks: {
      metadata: {
        title: '工作方式 - Toolipie',
        description:
          '了解 Toolipie 如何用简单 manifest、清晰输入和可重复输出封装面向任务的小工具。',
      },
      heading: '工作方式',
      intro:
        'Toolipie 是小型任务工具外面的一层封装。每个工具都放在一个简单文件夹里，遵守一个很小的约定，并且每次都用同样的方式运行。',
      anatomy: {
        heading: '插件结构',
        body:
          '一个工具就是一个文件夹：manifest 描述输入、输出和参数，入口文件负责真正执行任务。保持聚焦、确定、容易复用。',
        code: `my-tool/
  manifest.json     # 名称、版本、输入、输出、参数
  run.py            # 或 run.js - 入口文件
  assets/           # 可选模板/样式
  README.md         # 简短用法说明
`,
      },
      flow: {
        heading: '运行流程',
        steps: [
          '把输入文件放到约定路径',
          '通过 CLI 和清晰参数运行工具',
          '得到可跨项目复用的确定性输出',
        ],
      },
      services: {
        heading: '接入你自己的服务',
        body:
          '如果使用 API（例如 AI）能得到更好结果，就带上自己的 key，在工具里调用它。控制权仍然在你手里，而统一格式让流程保持可预测。',
      },
      closing: '优先做小而专注的工具。复用胜过重写。',
    },
    contribute: {
      metadata: {
        title: '贡献工具 - Toolipie',
        description:
          '为 Toolipie 贡献小而可复用的插件，保持清晰输入、输出和确定性行为。',
      },
      heading: '贡献工具',
      intro:
        'Toolipie 依靠小而有用的工具成长。如果你有一个反复解决的小任务，可以考虑把它做成插件，让其他人也能复用。复用胜过重写。',
      goodTool: {
        heading: '什么是好工具',
        body:
          '保持聚焦，输入、输出和参数要清楚。让它具备确定性，每次都用同样方式运行。',
      },
      structure: {
        heading: '插件结构',
        code: `my-tool/
  manifest.json     # 名称、版本、输入、输出、参数
  run.py            # 或 run.js - 入口文件
  assets/           # 可选模板/样式
  README.md         # 简短用法说明
`,
      },
      tips: {
        heading: '贡献建议',
        bullets: [
          '遵守插件文件夹格式，并保持输入/输出清晰',
          '优先保证输出确定；附上简单样例',
          '通过 issue 或 PR 讨论想法和改进',
        ],
      },
      closing: '感谢你一起把有用的小工具整理到一个地方。',
    },
    about: {
      metadata: {
        title: '关于 Toolipie',
        description:
          'Toolipie 是一个面向任务的 CLI，用来把重复使用的小脚本变成可复用、可预测的工具。',
      },
      heading: '关于 Toolipie',
      intro:
        'Toolipie 最初是为了解决一个问题：不要再为重复任务反复重写同样的小脚本。它是一个面向任务的 CLI，让小而可复用的工具放在简单、可预测的格式里。',
      why: {
        heading: '为什么存在',
        body:
          '把可信的解决方案放在同一个地方，意味着你可以跨项目、跨时间继续运行它，而不需要再翻找旧片段。复用胜过重写。',
      },
      design: {
        heading: '务实的设计',
        body:
          '哪种方式最能完成任务，就用哪种方式。如果 API 或 AI 能提升质量，就使用它；如果本地代码最快，就使用本地代码。工具保持模块化，外层封装让运行方式保持可预测。',
      },
      closing:
        '这是一个开源、适合社区贡献的项目。任何人都可以贡献一个把单一任务做好小工具。如果它对我有用，也可以对你有用。',
    },
  },
} satisfies typeof en;
