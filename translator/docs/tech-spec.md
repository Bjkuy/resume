# 技术方案

## 整体架构

```
用户手机浏览器
    ↓
GitHub Pages (静态托管)
    ↓
index.html (单体应用)
    ├── HTML 结构
    ├── CSS 样式 (移动端优先)
    └── JavaScript (翻译逻辑 + API调用)
         ↓
Google Translate API (免费接口)
```

## 技术选型

| 层级 | 技术 | 理由 |
|------|------|------|
| 页面结构 | HTML5 | 单一文件，简单可靠 |
| 样式 | CSS3 (自定义) | 无框架依赖，加载快 |
| 逻辑 | Vanilla JavaScript | 无需编译，直接运行 |
| 翻译引擎 | Google Translate 免费接口 | 无需API Key，免费 |
| 网页抓取 | CORS 代理 | 绕过跨域限制 |
| 托管 | GitHub Pages | 免费，HTTPS，全球CDN |
| PWA | Service Worker + Manifest | 可安装到桌面 |

## 翻译 API

### 接口
```
GET https://translate.googleapis.com/translate_a/single
  ?client=gtx
  &sl={源语言}     // auto/en/zh
  &tl={目标语言}   // zh/en
  &dt=t
  &q={待翻译文本}
```

### 响应格式
```json
[[["翻译结果","原文",null,null,1]],null,"en"]
```

### 语言代码
| 语言 | 代码 |
|------|------|
| 英文 | en |
| 中文 | zh |
| 自动检测 | auto |

## 网页内容抓取

### 方案
使用 CORS 代理服务获取目标网页HTML，再提取纯文本。

### 备选代理
1. `https://api.allorigins.win/raw?url=`
2. 内置简易代理（如可行）

### 文本提取策略
1. 获取 HTML
2. 移除 `<script>` `<style>` `<nav>` `<footer>` 等标签
3. 提取 `<p>` `<article>` `<h1>-<h6>` `<li>` 等正文标签
4. 按标签分行输出

## 文件结构
```
translator/
├── index.html          # 主应用（唯一文件）
├── CLAUDE.md           # 项目指引
├── docs/
│   ├── requirements.md # 需求文档
│   ├── tech-spec.md    # 技术方案（本文件）
│   ├── design-spec.md  # 设计规范
│   └── execution-steps.md # 执行步骤
└── logs/
    └── 2026-06-12.md   # 开发日志
```

## 兼容性
- iOS Safari 14+
- Android Chrome 90+
- 微信内置浏览器
- 桌面 Chrome / Edge / Firefox
