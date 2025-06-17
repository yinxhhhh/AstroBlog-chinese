/**
 * 获取唯一标签列表工具函数
 * 
 * 从文章集合中提取所有标签，去除重复项并排序。
 * 主要用于：
 * - 生成标签页面的标签列表
 * - 创建标签导航
 * - 标签云显示
 * 
 * 处理流程：
 * 1. 过滤已发布的文章
 * 2. 提取所有标签
 * 3. 生成 slug 和原始标签名的映射
 * 4. 去重并按字母顺序排序
 */

import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

/**
 * 标签对象接口定义
 */
interface Tag {
  /** URL 友好的标签 slug */
  tag: string;
  /** 原始标签名称 */
  tagName: string;
}

/**
 * 从文章集合中获取去重且排序的标签列表
 * @param posts - 文章集合数组
 * @returns 包含 slug 和原始名称的标签对象数组
 */
const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: Tag[] = posts
    .filter(postFilter) // 只处理已发布的文章
    .flatMap(post => post.data.tags) // 展平所有标签数组
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag })) // 生成标签对象
    .filter(
      // 根据 slug 去重
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag)); // 按字母顺序排序
  
  return tags;
};

export default getUniqueTags;
