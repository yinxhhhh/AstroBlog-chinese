/**
 * 获取排序后的文章列表工具函数
 * 
 * 该函数用于处理博客文章集合，提供以下功能：
 * - 过滤掉草稿和未来发布的文章
 * - 按照最新日期排序（优先使用修改时间，否则使用发布时间）
 * - 返回可发布的文章列表
 * 
 * 排序规则：较新的文章排在前面
 */

import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

/**
 * 获取按日期降序排列的已发布文章列表
 * @param posts - 文章集合数组
 * @returns 经过过滤和排序的文章数组
 */
const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter) // 过滤掉草稿和未来发布的文章
    .sort(
      (a, b) =>
        // 比较文章的最新日期（修改时间优先，否则使用发布时间）
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;
