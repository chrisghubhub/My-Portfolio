# GitHub Pages Deployment

## 文件位置

- 本地终稿：`project_root/report/version_a_v2/`
- Portfolio 仓库路径：`projects/agentic-ai-investment-deck/`
- GitHub 仓库：`chrisghubhub/My-Portfolio`

## GitHub Pages URL

https://chrisghubhub.github.io/My-Portfolio/projects/agentic-ai-investment-deck/

## 发布结构

```text
projects/agentic-ai-investment-deck/
├── index.html
├── style.css
├── deck.js
├── DEPLOYMENT.md
└── assets/
    ├── charts/
    └── downloads/
```

`assets/downloads/` 保存来源索引、证据矩阵和四个可下载 Excel 模型，避免线上附录产生断链。

## 更新方式

1. 在 `project_root/report/version_a_v2/` 修改 HTML、CSS 或 JavaScript。
2. 将 `index.html`、`style.css`、`deck.js` 和 `assets/` 同步至 Portfolio 仓库的 `projects/agentic-ai-investment-deck/`。
3. 提交并推送到 `My-Portfolio` 的 `main` 分支。
4. 等待 GitHub Pages 完成部署，然后检查上述 URL、附录抽屉、图片和下载链接。

## 快捷键

- 方向键 / Page Up / Page Down：翻页
- `O`：18 页总览
- `A`：打开隐藏附录
- `Esc`：关闭附录或退出总览

