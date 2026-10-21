# minimax-h31.com — MiniMax H3 视频生成工具站

记录日期：2026-10-21。

本文保存用户制定的站点专项规则，适用于后续页面和功能开发。本文中的 `app/`、`components/`、`content/` 和 `public/` 均以 `apps/next-app/` 为应用根目录。专项规则与根目录通用 TinyShip 约定冲突时，以用户的专项规则为准；用户后续明确指令优先。原始编号保留，不自行补写铁律 6。

模型事实部分是用户提供的编辑约束记录；正式发布页面前仍须核对官方一手资料，不能把本文当作模型发布公告来源。以下记录不表示已实施页面或已开通发布监控。

技术栈：TinyShip 的 Next.js 路线（App Router）+ Tailwind CSS v4 + shadcn/ui。
页面文案、Title、正文用英文；commit message 用中文。

## 目录约定（务必遵守）

- 路由：`app/page.tsx`（首页）、`app/<slug>/page.tsx`（内页）；slug 与已定 URL 完全一致，不得改。
- 共享布局：`app/layout.tsx` —— 顶部 Header 导航与页脚免责声明**只在这里实现一次**。
- 组件：`components/**`；shadcn 组件在 `components/ui/**`；工具交互组件放 `components/tool/**`。
- 页面文案：`content/<slug>.ts`，一个页面一个文件，导出结构化对象（便于发布当天改版本号）。
- 全局样式：`app/globals.css`（Tailwind v4 + CSS 变量主题）。
- 站点地图：`app/sitemap.ts`；robots：`app/robots.ts`。

## 铁律 1（最高优先级）：H3.1 尚未发布，不许编造

事实：MiniMax H3 发布于 2026-07-31；M3.1 Flash 发布于 2026-10-19（文本线，与视频无关）；
截至 2026-10-21，官方从未发布或确认 H3.1。

- 禁止写出 H3.1 的任何参数、价格、分辨率、时长、API 端点、实测结论、发布日期。
- 未确认内容一律写 `Official details not yet announced.`，紧跟 `<time>` 显示页面更新日期。
- 禁止出现「据传」「内部消息」。
- 首页工具区必须明示：当前运行的是 MiniMax H3；H3.1 发布后 8小时内切换。
- 允许并必须写：H3 的用法、H3 与 H3.1 的已知差异（无差异就写目前未知）。

## 铁律 2：一页一词，不自我竞争

- 每页 `metadata.title` ≤60 字符，格式＝主目标词＋具体修饰；不写 slogan，不写 Best/Ultimate/Revolutionary 这类无人搜索的词。
- 全页唯一一个 h1，完整包含主目标词；首段第一句也含主目标词。
- 页面只打自己那一词，不得用别页主词做 title。
- 不要在 `app/layout.tsx` 设置 `metadata.title.template`（会把子页 title 拖超 60 字符）；子页用 `title: { absolute: '...' }` 或直接字符串。

## 铁律 3：体量与结构

- 首页正文 ≥1500 词；其余页面 ≥800 词。
- 每页 ≥5 个 h2，每个覆盖一个真实用户意图（不是凑数）。
- 参数、限制、对比、定价一律用表格，不用大段散文。
- FAQ ≥8 条，问题是用户会搜的整句，答案 40~80 词，并输出 FAQPage 结构化数据。
- 每页底部显示真实日期的 `Last updated: YYYY-MM-DD`。

## 铁律 4：渲染与索引（Next.js 硬要求）

- 页面默认 Server Component。所有文案、h1/h2、FAQ、表格必须出现在服务端渲染的 HTML 里。
- 只有工具交互区加 `"use client"`，且该组件下方必须有 SSR 的服务端说明段落。
- 禁止用 `dynamic(() => import(...), { ssr: false })` 包裹任何正文区块。
- 结构化数据在 `page.tsx` 内直接输出，必须在 HTML 源码中：
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />`
- `app/sitemap.ts` 只允许出现这 5 个 URL，新增页面必须先加进白名单数组：
  `/`、`/minimax-h3.1-comfyui`、`/minimax-h3.1-max`、`/minimax-h3.1-pricing`、`/minimax-h3.1-release-date`
- `app/robots.ts` 必须包含 `Disallow: /result/`。
- `app/result/[id]/page.tsx` 必须 `export const metadata = { robots: { index: false, follow: false } }`。
- 图片用 `next/image` 并显式写 width/height；字体用 `next/font`；首屏禁粒子背景、模糊光斑、滚动视差。

## 铁律 5：内链

- 顶部导航在 `app/layout.tsx` 的 Header 里定义一次，8 个入口：Home / ComfyUI / H3.1 Max / Free / Pricing / Prompts / Release Date / Review（未上线的先隐藏，不要指向 404）。
- 每页正文 ≥2 处自然内链指向首页工具区，锚文本用工具词（如 `MiniMax H3.1 video generator`），禁用 click here。
- 首页正文下部用卡片网格列出其余页面，每张卡一句「这页解决什么」。
- 不做面包屑、不做侧栏、不做标签云。

## 铁律 7：仓库清理边界

- 只允许新建/修改 `app/**`、`components/**`、`content/**`、`public/**`、`app/globals.css`。
- 禁止删除或重写：认证、支付、数据库 schema 与迁移、邮件模板、i18n 词表、环境变量样例。这些在静态扫描里常显示「未被引用」，实际是承重墙。
- 禁止修改 package.json 依赖、lockfile、已有 next.config / tailwind 配置（可新增，不可删）。
- 删除任何文件前先列清单和理由，我确认后才动；每次删除独立 commit，删完必须 `npm run build` + `npm run typecheck` 通过，不通过立即 revert 并报告。

## 工作流

- 用现有 shadcn/ui 组件，不新增 UI 依赖；颜色/圆角/字体走 CSS 变量，不写死。
- 每完成一页：加进 `app/sitemap.ts` 白名单 → `npm run build` → git commit（信息写页面路径）→ 输出自检表：
  路由路径 / metadata.title 字符数 / h1 唯一且含主词 / 正文词数 / h2 数 / FAQ 数 / JSON-LD 在源码中 / 指向首页内链数 / `curl` 抓 HTML 能否看到正文 / 是否在 sitemap 白名单 / robots 正确。
