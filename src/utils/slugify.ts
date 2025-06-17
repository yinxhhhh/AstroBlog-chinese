/**
 * Slugify 工具函数
 * 
 * 用于将字符串转换为 URL 友好的格式，主要用于：
 * - 生成文章 URL slug
 * - 创建标签链接
 * - 生成锚点链接
 * - 视图转换动画名称
 * 
 * 使用 lodash.kebabcase 将字符串转换为 kebab-case 格式
 * 例如：'Hello World' -> 'hello-world'
 */

import kebabcase from "lodash.kebabcase";

/**
 * 将单个字符串转换为 slug 格式
 * @param str - 要转换的字符串
 * @returns 转换后的 slug 字符串
 */
export const slugifyStr = (str: string) => kebabcase(str);

/**
 * 批量将字符串数组转换为 slug 格式
 * @param arr - 要转换的字符串数组
 * @returns 转换后的 slug 字符串数组
 */
export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
