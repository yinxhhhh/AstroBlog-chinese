---
author: Sat Naing
pubDatetime: 2024-01-15T10:00:00Z
title: AstroPaper 中文博客主题介绍
slug: astropaper-zhongwen-jieshao
featured: true
draft: false
tags:
  - 介绍
  - 文档
  - 中文
description: AstroPaper 是一个极简、响应式且对SEO友好的Astro博客主题的完整介绍。
---

欢迎使用 AstroPaper！这是一个专为中文用户设计的现代化博客主题。

## 目录

## 什么是 AstroPaper？

AstroPaper 是一个基于 [Astro](https://astro.build/) 和 [Tailwind CSS](https://tailwindcss.com/) 构建的极简博客主题。它专注于性能、可访问性和搜索引擎优化。

### 主要特性

- ⚡ **极快加载速度** - 基于 Astro 的静态站点生成
- 🎨 **现代设计** - 简洁美观的界面设计
- 📱 **响应式布局** - 完美适配各种设备
- 🌓 **明暗主题** - 支持自动切换的明暗模式
- 🔍 **SEO优化** - 内置完整的SEO优化方案
- 🔎 **站内搜索** - 使用 PageFind 实现的快速搜索
- ♿ **无障碍访问** - 遵循 WCAG 无障碍标准
- 📊 **社交分享** - 内置社交媒体分享功能

## 快速开始

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/satnaing/astro-paper.git
   cd astro-paper
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

4. **构建生产版本**
   ```bash
   pnpm build
   ```

## 配置说明

### 基本配置

在 `src/config.ts` 文件中，您可以自定义网站的基本信息：

```typescript
export const SITE = {
  website: "https://your-domain.com", // 您的网站域名
  author: "您的姓名",
  profile: "https://your-profile.com",
  desc: "您的网站描述",
  title: "您的网站标题",
  // ... 更多配置选项
}
```

### 社交链接配置

在 `src/constants.ts` 文件中配置您的社交媒体链接：

```typescript
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/your-username",
    linkTitle: "在Github上关注我",
    active: true,
  },
  // 添加更多社交链接...
]
```

## 创建文章

### 文章格式

所有文章都存放在 `src/data/blog/` 目录中，使用 Markdown 格式编写。每篇文章都需要包含前言（frontmatter）：

```markdown
---
author: 作者姓名
pubDatetime: 2024-01-15T10:00:00Z
title: 文章标题
slug: 文章链接
featured: true
draft: false
tags:
  - 标签1
  - 标签2
description: 文章描述
---

这里是文章内容...
```

### 文章属性说明

- `author`: 文章作者
- `pubDatetime`: 发布时间（ISO 格式）
- `title`: 文章标题
- `slug`: URL 路径（建议使用英文）
- `featured`: 是否为精选文章
- `draft`: 是否为草稿
- `tags`: 文章标签
- `description`: 文章描述

## 自定义样式

### 修改主题色

您可以在 `src/styles/global.css` 中自定义主题颜色：

```css
:root {
  --color-accent: #your-color;
  --color-background: #your-background;
  /* 更多颜色变量... */
}
```

### 添加自定义字体

支持 Google Fonts 和本地字体：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

body {
  font-family: 'Noto Sans SC', sans-serif;
}
```

## 部署指南

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置构建命令为 `pnpm build`
4. 部署完成！

### Netlify 部署

1. 连接 GitHub 仓库
2. 设置构建命令：`pnpm build`
3. 设置发布目录：`dist`
4. 部署完成！

## 最佳实践

### 文章写作建议

1. **使用清晰的标题结构** - 合理使用 H2、H3 等标题
2. **添加目录** - 长文章建议添加目录导航
3. **优化图片** - 使用适当大小的图片并添加 alt 文本
4. **合理使用标签** - 为文章添加相关标签便于分类

### SEO 优化

1. **编写有吸引力的描述** - 每篇文章都应该有独特的描述
2. **使用语义化的URL** - slug 应该简洁且有意义
3. **添加社交图片** - 可以为文章设置自定义的 OG 图片
4. **保持内容质量** - 定期更新和维护文章内容

## 获取帮助

如果您在使用过程中遇到问题，可以：

- 查看 [官方文档](https://github.com/satnaing/astro-paper)
- 提交 [Issue](https://github.com/satnaing/astro-paper/issues)
- 参与 [讨论](https://github.com/satnaing/astro-paper/discussions)

## 总结

AstroPaper 是一个功能完整、易于使用的博客主题。无论您是技术博主还是内容创作者，它都能为您提供一个优秀的写作和分享平台。

开始您的博客之旅吧！🚀
