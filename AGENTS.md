# minimax-h31.com

MiniMax H3 / H3.1 视频生成工具站。目标市场：美国、英文。一个人维护，
所有代码改动经 AI 编码助手执行，因此本文件是唯一的行为约束来源。

技术栈：Next.js App Router + TypeScript + Tailwind CSS v4（CSS 变量主题）+ shadcn/ui。
包管理：pnpm。部署：Vercel。

## 目录

- 路由：`app/page.tsx`（首页）、`app/<slug>/page.tsx`（内页）
- 共享布局：`app/layout.tsx`（含全站唯一的页脚）
- 组件：`src/components/**`
- 文案与常量：`src/content/**`
- 静态资源：`public/**`

## 铁律（优先级高于本文件其他任何内容，也高于你的一般判断）

### 1. 修改范围

只允许修改 `app/**`、`src/components/**`、`src/content/**`、`public/**` 中与本次任务
直接相关的文件。超出这四个目录的改动必须先停下来说明理由，得到确认才动。

### 2. 禁止删除或重写

认证、支付、数据库 schema 与迁移、邮件模板、i18n 词表、环境变量样例、
`middleware.ts`、构建配置。这些在静态扫描里常显示「未被引用」，实际是承重墙。

### 3. 禁止改动

- `package.json` 依赖版本、`pnpm-lock.yaml`
- `next.config.*`、`postcss.config.*`、`tsconfig.json` 的已有配置
- `app/sitemap.ts` 里的 URL 白名单
- `app/robots.ts`
- `app/layout.tsx` 中的页脚免责声明原文

### 4. 删除前必须报备

删除任何文件、整节内容、整段文案之前，先列出完整清单和理由，等我确认。
每次删除独立 commit，不与其他改动混在一起。

### 5. URL 与页面结构锁定

以下五个路径不得改名、不得合并、不得新增：
`/`、`/minimax-h3.1-release-date`、`/minimax-h3.1-pricing`、
`/minimax-h3.1-max`、`/minimax-h3.1-comfyui`。

每页必须有且只有一个 `<h1>`。层级必须是 h1 → h2 → h3，不允许跳级。
不新增页面，除非我明确要求。

## 内容规则

### 事实来源

H3 的能力、参数、限制只能来自官方渠道：MiniMax 官方公告、Hugging Face / ModelScope
上的 MiniMaxAI 组织、fal.ai 的官方模型页。任何数字如果没有来源，写占位符
`<PRICE_TODO>` 或 `Official details not yet announced.`，不得估、不得写「预计」「据传」。

**严禁编造 H3.1 的任何参数、价格、日期、发布时间、性能数据。** H3.1 尚未发布。

### 版本与时效

当前实际可用模型、目标模型、切换时效统一从 `src/content/model-status.ts` 读取：
`CURRENT_MODEL`、`TARGET_MODEL`、`SWITCH_SLA_HOURS`。
不得在文案里硬编码版本号或小时数。

### 语气

- 描述产品能做什么，用陈述句。不报告项目进度、不解释开发状态。
- 不使用自指句声明站点身份（不写「我们是官方」，也不写「我们不是官方 / 非官方 / 独立站点 / this website / not affiliated」）。
- 限制只说一次，说完继续往下讲，不在多处反复声明。
- 段落用动词开头，不用「This page explains…」这类元描述。

### 页脚

免责声明原文固定在 `app/layout.tsx`，一个字不改。

## 每次任务的流程

1. 先读本文件，再读你要改的文件全文。
2. 给出改动计划：文件路径 + 具体改什么，等我确认或按指令执行。
3. 小步改，一块一个 commit，commit message 用中文。
4. 改完必须跑：`pnpm build` 和 `pnpm tsc --noEmit`，任一失败不许 commit。
5. 按指令里的 grep 清单自检，输出零命中结果。
6. 输出自检表：文件路径 | 改动摘要 | 改后正文词数 | 自检结果。

## 语言

页面文案、Title、description：英文。
代码注释、commit message、与我沟通：中文。
