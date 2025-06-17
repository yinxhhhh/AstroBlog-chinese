/**
 * 网站配置文件
 * 
 * 这是 AstroPaper 博客主题的主要配置文件，包含以下设置：
 * - 网站基本信息（标题、描述、作者等）
 * - 页面显示配置（每页文章数量、功能开关等）
 * - 编辑功能配置
 * - 国际化设置（语言、时区、文本方向）
 * - OG 图片和 SEO 相关设置
 * 
 * 修改此文件中的配置来定制你的博客外观和行为。
 */

export const SITE = {
  /** 网站部署后的完整域名 URL，用于生成绝对链接和 sitemap */
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  
  /** 作者姓名，显示在页脚和 meta 标签中 */
  author: "Sat Naing",
  
  /** 作者个人资料或简介页面链接 */
  profile: "https://satnaing.dev/",
  
  /** 网站描述，用于 SEO 和社交媒体分享 */
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  
  /** 网站标题，显示在浏览器标签页和 header 中 */
  title: "***'s Blog",
  
  /** 默认 OG 图片文件名，位于 public 目录下 */
  ogImage: "astropaper-og.jpg",
  
  /** 是否启用明暗主题切换功能 */
  lightAndDarkMode: false,
  
  /** 首页显示的文章数量 */
  postPerIndex: 4,
  
  /** 文章列表页每页显示的文章数量 */
  postPerPage: 4,
  
  /** 预定发布文章的时间差值（毫秒），允许提前一定时间显示文章 */
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  
  /** 是否显示归档页面 */
  showArchives: true,
  
  /** 是否在文章详情页显示返回按钮 */
  showBackButton: true, // show back button in post detail
  
  /** 编辑文章功能配置 */
  editPost: {
    /** 是否启用编辑链接 */
    enabled: false,
    /** 编辑链接的显示文本 */
    text: "建议修改",
    /** 编辑链接的基础 URL，通常指向 GitHub 仓库的编辑页面 */
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  
  /** 是否启用动态 OG 图片生成 */
  dynamicOgImage: true,
  
  /** 文本阅读方向：ltr（从左到右）、rtl（从右到左）、auto（自动） */
  dir: "ltr", // "rtl" | "auto"
  
  /** 网站语言代码，影响 HTML lang 属性。留空默认为 "en" */
  lang: "zh-cn", // html lang code. Set this empty and default will be "en"
  
  /** 默认全局时区（IANA 格式），用于日期显示 */
  // 参考：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
