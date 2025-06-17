---
author: Sat Naing
pubDatetime: 2024-01-17T09:15:00Z
title: 如何在 AstroPaper 中添加新文章
slug: how-to-add-new-posts-cn
featured: true
draft: false
tags:
  - 文档
  - 教程
  - 写作
description: 在 AstroPaper 博客主题中创建和添加新文章的完整指南和最佳实践。
---

这里是在 AstroPaper 博客主题中创建新文章的完整指南，包括规则、建议、技巧和最佳实践。

## 目录

## 创建博客文章

### 文件位置

所有博客文章都存储在 `src/data/blog/` 目录中。每篇文章都是一个独立的 Markdown 文件（`.md` 或 `.mdx`）。

### 文件命名规范

建议使用以下命名规范：

```
yyyy-mm-dd-article-title.md
```

例如：
- `2024-01-17-how-to-write-blog.md`
- `2024-01-18-astro-paper-guide.md`

### 基本文章结构

每篇文章都必须包含前言（frontmatter）和正文内容：

```markdown
---
author: 作者姓名
pubDatetime: 2024-01-17T09:15:00Z
modDatetime: 2024-01-18T10:00:00Z
title: 文章标题
slug: article-url-slug
featured: false
draft: false
tags:
  - 标签1
  - 标签2
description: 文章的简短描述，用于SEO和社交分享
ogImage: /images/custom-og-image.jpg
canonicalURL: https://example.com/original-article
hideEditPost: false
---

这里是文章的正文内容...
```

## 前言字段详解

### 必需字段

#### `author`
- **类型**: string
- **说明**: 文章作者姓名
- **示例**: `"张三"`

#### `pubDatetime`
- **类型**: ISO 8601 日期字符串
- **说明**: 文章发布时间
- **格式**: `YYYY-MM-DDTHH:mm:ssZ`
- **示例**: `2024-01-17T09:15:00Z`

#### `title`
- **类型**: string
- **说明**: 文章标题
- **建议**: 简洁明了，60字符以内
- **示例**: `"如何优化网站性能"`

#### `description`
- **类型**: string
- **说明**: 文章描述，用于SEO和预览
- **建议**: 120-160字符
- **示例**: `"详细介绍网站性能优化的方法和最佳实践"`

### 可选字段

#### `slug`
- **类型**: string
- **说明**: URL路径，如果不指定会根据文件名生成
- **建议**: 使用英文，用连字符分隔
- **示例**: `"website-performance-optimization"`

#### `modDatetime`
- **类型**: ISO 8601 日期字符串
- **说明**: 文章修改时间
- **示例**: `2024-01-18T10:00:00Z`

#### `featured`
- **类型**: boolean
- **默认值**: false
- **说明**: 是否在首页精选区域显示

#### `draft`
- **类型**: boolean
- **默认值**: false
- **说明**: 是否为草稿（草稿不会在生产环境中显示）

#### `tags`
- **类型**: string[]
- **说明**: 文章标签数组
- **建议**: 使用2-5个相关标签
- **示例**: `["技术", "前端", "性能优化"]`

#### `ogImage`
- **类型**: string
- **说明**: 自定义社交分享图片
- **支持**: 相对路径或绝对URL
- **示例**: `"/images/my-article-image.jpg"`

#### `canonicalURL`
- **类型**: string
- **说明**: 规范URL，用于指向原始文章（如果是转载）
- **示例**: `"https://original-site.com/article"`

#### `hideEditPost`
- **类型**: boolean
- **默认值**: false
- **说明**: 是否隐藏"建议修改"按钮

## 内容编写指南

### Markdown 语法

AstroPaper 支持标准的 Markdown 语法，以及一些扩展功能。

#### 标题结构

```markdown
# 一级标题 (自动生成，请勿使用)
## 二级标题
### 三级标题
#### 四级标题
```

#### 段落和换行

```markdown
这是一个段落。

这是另一个段落。

使用两个空格在行尾  
可以创建软换行。
```

#### 强调文本

```markdown
*斜体文本*
**粗体文本**
***粗斜体文本***
~~删除线文本~~
```

#### 列表

```markdown
无序列表：
- 项目1
- 项目2
  - 子项目
  - 另一个子项目

有序列表：
1. 第一项
2. 第二项
3. 第三项
```

#### 链接和图片

```markdown
[链接文本](https://example.com)
[带标题的链接](https://example.com "链接标题")

![图片alt文本](/path/to/image.jpg)
![带标题的图片](/path/to/image.jpg "图片标题")
```

#### 代码

行内代码：`code`

代码块：
````markdown
```javascript
function hello() {
  console.log("Hello World!");
}
```
````

#### 引用

```markdown
> 这是一个引用
> 
> 引用可以包含多行内容
```

#### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

### 扩展功能

#### 目录

自动生成目录（基于标题）：

```markdown
## 目录

文章会自动提取二级和三级标题生成目录导航。
```

#### 图片优化

推荐将图片放在 `public/images/` 目录中：

```markdown
![优化后的图片](/images/my-article/hero-image.webp)
```

#### 代码高亮

支持多种编程语言的语法高亮：

````markdown
```typescript
interface BlogPost {
  title: string;
  author: string;
  pubDate: Date;
}
```
````

## 文章组织策略

### 标签系统

建议使用一致的标签分类：

```yaml
技术类标签:
  - "前端"
  - "后端" 
  - "数据库"
  - "DevOps"

内容类标签:
  - "教程"
  - "经验分享"
  - "工具推荐"
  - "行业动态"

难度标签:
  - "入门"
  - "进阶"
  - "高级"
```

### 系列文章

对于系列文章，建议：

1. 使用统一的标签
2. 在标题中包含系列信息
3. 在文章开头添加系列导航

```markdown
---
title: "Vue.js 完全指南 - 第1章：基础概念"
tags:
  - "Vue.js"
  - "系列教程"
  - "前端"
---

## 系列导航

- 第1章：基础概念（当前）
- [第2章：组件开发](./vue-guide-02-components)
- [第3章：状态管理](./vue-guide-03-state)
```

## 图片和媒体

### 图片优化

1. **格式选择**
   - 照片使用 JPEG 或 WebP
   - 图标使用 SVG 或 PNG
   - 动图使用 GIF 或 WebP

2. **尺寸建议**
   - 文章主图：1200x630px（适合社交分享）
   - 内容图片：不超过 800px 宽度
   - 缩略图：300x200px

3. **压缩优化**
   - 使用在线工具压缩图片
   - 考虑使用 WebP 格式

### 图片目录结构

```
public/
├── images/
│   ├── blog/
│   │   ├── 2024/
│   │   │   ├── 01/
│   │   │   │   ├── article-1-hero.webp
│   │   │   │   └── article-1-diagram.png
│   │   │   └── 02/
│   │   └── common/
│   └── og/
```

## SEO 优化

### 标题优化

```markdown
---
title: "完整指南：如何在2024年学习React"
description: "从零开始学习React的完整路线图，包含最新的Hooks、Context API和最佳实践"
---
```

### 元数据优化

```markdown
---
# SEO友好的描述
description: "详细介绍React学习路径，涵盖组件、状态管理、路由等核心概念"

# 自定义OG图片
ogImage: "/images/blog/react-learning-guide-og.jpg"

# 如果是转载，添加原始链接
canonicalURL: "https://original-source.com/react-guide"
---
```

### 内容SEO

1. **关键词使用**
   - 在标题中包含主要关键词
   - 在描述中自然使用相关词汇
   - 在正文中合理分布关键词

2. **内容结构**
   - 使用清晰的标题层次
   - 添加目录导航
   - 合理使用列表和表格

## 发布流程

### 预发布检查

发布前请检查：

1. ✅ 前言信息完整正确
2. ✅ 标题和描述吸引人
3. ✅ 标签准确且一致
4. ✅ 图片已优化并正确显示
5. ✅ 代码块语法正确
6. ✅ 链接都可以正常访问
7. ✅ 语法和拼写检查

### 草稿模式

开发阶段使用草稿模式：

```markdown
---
draft: true
---
```

### 预定发布

设置未来的发布时间：

```markdown
---
pubDatetime: 2024-02-01T10:00:00Z
---
```

## 最佳实践

### 写作技巧

1. **开头吸引读者**
   - 提出问题或痛点
   - 分享有趣的事实
   - 直接说明文章价值

2. **内容组织**
   - 使用小标题分段
   - 添加代码示例
   - 提供实际案例

3. **结尾总结**
   - 总结关键要点
   - 提供进一步阅读
   - 鼓励读者互动

### 维护更新

1. **定期检查**
   - 更新过时的信息
   - 修复失效的链接
   - 改进内容质量

2. **读者反馈**
   - 回应评论和建议
   - 根据反馈改进内容
   - 添加相关的补充信息

通过遵循这些指南，您可以创建高质量、用户友好的博客文章！
