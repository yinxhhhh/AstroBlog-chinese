---
author: Sat Naing
pubDatetime: 2024-01-16T08:30:00Z
title: 如何配置 AstroPaper 主题
slug: how-to-configure-astropaper-cn
featured: true
draft: false
tags:
  - 配置
  - 文档
  - 教程
description: 详细介绍如何配置和自定义 AstroPaper 主题以满足您的个人需求。
---

AstroPaper 是一个高度可定制的 Astro 博客主题。通过 AstroPaper，您可以根据个人喜好自定义所有内容。本文将解释如何在配置文件中轻松进行一些自定义设置。

## 目录

## 配置 SITE

重要的配置位于 `src/config.ts` 文件中。在该文件中，您将看到 `SITE` 对象，您可以在其中指定网站的主要配置。

在开发过程中，可以将 `SITE.website` 留空。但在生产模式下，您应该在 `SITE.website` 选项中指定您的部署网址，因为这将用于规范URL、社交卡片URL等，这些对SEO很重要。

```typescript
export const SITE = {
  website: "https://your-site.pages.dev/", // 替换为您的部署域名
  author: "您的姓名",
  profile: "https://yourprofile.dev/",
  desc: "一个极简、响应式且对SEO友好的 Astro 博客主题。",
  title: "您的博客标题",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15分钟
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "建议修改",
    url: "https://github.com/yourusername/your-repo/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-cn",
  timezone: "Asia/Shanghai",
} as const;
```

### 配置选项说明

| 选项 | 类型 | 说明 |
|------|------|------|
| `website` | string | 您的网站URL（生产环境必填） |
| `author` | string | 网站作者姓名 |
| `profile` | string | 作者个人资料链接 |
| `desc` | string | 网站描述 |
| `title` | string | 网站标题 |
| `ogImage` | string | 默认OG图片 |
| `lightAndDarkMode` | boolean | 是否启用明暗模式切换 |
| `postPerIndex` | number | 首页显示的文章数量 |
| `postPerPage` | number | 每页显示的文章数量 |
| `showArchives` | boolean | 是否显示归档页面 |
| `showBackButton` | boolean | 是否显示返回按钮 |
| `lang` | string | 网站语言代码 |
| `timezone` | string | 默认时区 |

## 配置社交链接

社交链接配置位于 `src/constants.ts` 文件中：

```typescript
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yourusername",
    linkTitle: `在Github上关注 ${SITE.title}`,
    active: true,
  },
  {
    name: "WeChat",
    href: "https://weixin.qq.com/",
    linkTitle: `通过微信联系 ${SITE.title}`,
    active: true,
  },
  {
    name: "Weibo", 
    href: "https://weibo.com/yourusername",
    linkTitle: `在微博上关注 ${SITE.title}`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `发送邮件给 ${SITE.title}`,
    active: false,
  },
];
```

### 可用的社交平台

- Github
- LinkedIn  
- Twitter/X
- Instagram
- Facebook
- WhatsApp
- Telegram
- Pinterest
- Reddit
- Mail
- RSS

## 配置分享链接

您可以在 `src/constants.ts` 中配置文章分享功能：

```typescript
export const SHARE_LINKS: SocialObjects = [
  {
    name: "WeChat",
    href: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=",
    linkTitle: "分享到微信",
    active: true,
  },
  {
    name: "Weibo",
    href: "https://service.weibo.com/share/share.php?url=",
    linkTitle: "分享到微博", 
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/intent/tweet?url=",
    linkTitle: "分享到Twitter",
    active: true,
  },
];
```

## 自定义样式

### 修改主题颜色

在 `src/styles/global.css` 中自定义颜色：

```css
:root {
  /* 主色调 */
  --color-accent: #2563eb;
  
  /* 背景色 */
  --color-background: #ffffff;
  --color-foreground: #0f172a;
  
  /* 边框色 */
  --color-border: #e2e8f0;
  
  /* 静音色 */
  --color-muted: #64748b;
}

/* 暗色主题 */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-foreground: #f1f5f9;
  --color-border: #334155;
  --color-muted: #94a3b8;
}
```

### 自定义字体

推荐使用中文字体：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

:root {
  --font-family: 'Noto Sans SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  --font-mono: 'Fira Code', 'Cascadia Code', Consolas, Monaco, 'Courier New', monospace;
}

body {
  font-family: var(--font-family);
}

code, pre {
  font-family: var(--font-mono);
}
```

## 编辑文章功能配置

如果您想让读者能够建议编辑您的文章，可以配置编辑功能：

```typescript
editPost: {
  enabled: true,
  text: "建议修改",
  url: "https://github.com/yourusername/your-repo/edit/main/",
}
```

当启用此功能时，每篇文章底部都会显示一个"建议修改"链接，点击后会跳转到 GitHub 编辑页面。

## OG 图片配置

### 静态 OG 图片

将默认的社交分享图片放在 `public/` 目录中，并在配置中指定：

```typescript
ogImage: "your-og-image.jpg"
```

### 动态 OG 图片

启用动态 OG 图片生成：

```typescript
dynamicOgImage: true
```

这样系统会为每篇文章自动生成包含文章标题的 OG 图片。

## 时区配置

设置正确的时区确保文章时间显示正确：

```typescript
timezone: "Asia/Shanghai" // 中国标准时间
```

常用的亚洲时区：
- `Asia/Shanghai` - 中国标准时间
- `Asia/Hong_Kong` - 香港时间  
- `Asia/Taipei` - 台北时间
- `Asia/Tokyo` - 日本标准时间

## 高级配置

### 预定发布

您可以设置文章的预定发布时间：

```typescript
scheduledPostMargin: 15 * 60 * 1000 // 15分钟的缓冲时间
```

### 自定义404页面

编辑 `src/pages/404.astro` 来自定义您的404页面。

### 自定义robots.txt

编辑 `src/pages/robots.txt.ts` 来配置搜索引擎爬虫规则。

## 验证配置

配置完成后，运行以下命令验证：

```bash
# 开发模式
pnpm dev

# 构建验证
pnpm build
```

确保没有错误信息，并在浏览器中检查各项功能是否正常工作。

## 小贴士

1. **备份配置** - 在修改前备份原始配置文件
2. **渐进式配置** - 一次修改一个配置项，便于排查问题
3. **测试功能** - 每次修改后都要测试相关功能
4. **查看文档** - 遇到问题时查看官方文档或源码

通过这些配置，您可以让 AstroPaper 完全适合您的需求！
