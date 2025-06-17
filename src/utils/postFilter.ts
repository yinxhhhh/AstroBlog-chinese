/**
 * 文章过滤器工具函数
 * 
 * 用于过滤文章集合，确定哪些文章应该显示给用户。
 * 过滤规则：
 * - 排除草稿文章（draft: true）
 * - 在生产环境中，排除未来发布的文章（考虑预定发布时间差）
 * - 在开发环境中，显示所有非草稿文章以便预览
 */

import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

/**
 * 判断文章是否应该被发布显示
 * @param data - 文章数据对象，包含发布时间、草稿状态等信息
 * @returns 是否应该显示该文章
 */
const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // 检查发布时间是否已过（考虑预定发布时间差）
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  
  // 返回过滤结果：非草稿 且 (开发环境 或 发布时间已过)
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
