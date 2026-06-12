# 翻译小工具 — CLAUDE.md 项目指引

## 项目概述
手机翻译小工具：粘贴文字/输入网址 → 文字分行 → 点击行翻译。中英双向互译，PWA可安装到桌面。

## 项目文件夹结构
```
translator/
├── CLAUDE.md                  ← 本文件（项目指引）
├── index.html                 ← 主应用（待创建）
├── docs/
│   ├── requirements.md        ← 开发需求文档（功能定义、优先级）
│   ├── tech-spec.md           ← 技术方案（架构、API、技术选型）
│   ├── design-spec.md         ← 设计规范（色彩、排版、间距、交互）
│   └── execution-steps.md     ← 执行步骤（分步任务、当前进度）
└── logs/
    └── YYYY-MM-DD.md          ← 每日开发日志
```

## 标准文件路径

| 文件 | 路径 | 用途 |
|------|------|------|
| 需求文档 | `translator/docs/requirements.md` | 功能需求定义，开发前必读 |
| 技术方案 | `translator/docs/tech-spec.md` | 技术选型、API接口说明 |
| 设计规范 | `translator/docs/design-spec.md` | 色彩、排版、间距、动效标准 |
| 执行步骤 | `translator/docs/execution-steps.md` | 开发分步计划，标记当前进度 |
| 开发日志 | `translator/logs/YYYY-MM-DD.md` | 每日开发记录 |

## 工作说明

### 开始开发前
1. 阅读 `docs/execution-steps.md` 确认当前步骤
2. 阅读 `docs/requirements.md` 了解功能需求
3. 参考 `docs/design-spec.md` 确保样式符合规范
4. 参考 `docs/tech-spec.md` 使用正确的 API 和技术方案

### 开发过程中
- **每次只做一步**：按 `execution-steps.md` 中的步骤顺序执行
- **每步完成后验证**：在手机上确认功能正常
- **每步一个 commit**：Git 提交信息标明步骤编号
- **更新执行步骤**：标记完成的任务 `[x]`
- **写开发日志**：在 `logs/` 下记录当天完成的事

### 每日收尾
- 在 `logs/` 创建/更新当日日志
- 记录已完成、待办、遇到的问题
- 更新 `execution-steps.md` 的当前状态

## 关键约束
- 用户是代码小白，界面必须简单直观
- 移动端优先，触控区域 ≥ 48px
- 使用免费翻译 API，无需用户配置
- 单文件架构（index.html），部署简单
- 托管在 GitHub Pages：`https://bjkuy.github.io/resume/translator/`
