/**
 * 网站常量配置文件
 * 
 * 定义网站的社交媒体链接和分享选项，包括：
 * - 社交媒体平台配置（GitHub、Twitter/X、LinkedIn、邮件等）
 * - 文章分享链接配置（WhatsApp、Facebook、Telegram 等）
 * - 每个平台的图标、链接和标题配置
 * 
 * 修改此文件来定制你的社交媒体链接和分享选项。
 */

import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

/**
 * 社交媒体平台接口定义
 */
interface Social {
  /** 平台名称 */
  name: string;
  /** 链接地址 */
  href: string;
  /** 链接标题（用于 title 属性和无障碍访问） */
  linkTitle: string;
  /** 图标组件 */
  icon: (_props: Props) => Element;
}

/**
 * 社交媒体平台配置
 * 这些链接会显示在网站的社交媒体区域
 */
export const SOCIALS: Social[] = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "123456@example.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

/**
 * 文章分享链接配置
 * 这些选项会显示在文章页面的分享区域
 */
export const SHARE_LINKS: Social[] = [
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
