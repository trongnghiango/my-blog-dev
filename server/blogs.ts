import { BlogDetail, BlogPost } from "@/interface/blog";
import { discussionDetailGql, discussionGraphql } from "./ghGraphql";

const API_URL = 'https://api.github.com/graphql'

const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN || '';
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID || '';

export async function getBlogs(): Promise<BlogPost[]> {

  try {
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `token ${GH_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: discussionGraphql(DISCUSSION_CATEGORY_ID) })
    });
  
    const res = await response.json();
    // console.log('Discussion::',res.data.repository.discussions)
    const discussions = res?.data?.repository?.discussions?.nodes
  
    const posts = discussions.map((discussion: any): BlogPost => {
      const {
        title,
        author,
        createdAt,
        lastEditedAt: updatedAt,
        number: id,
        bodyHTML: html,
        bodyText,
        labels,
        url: discussionUrl
      } = discussion;
      const url = `/blog/${id}`;
      const authorUrl = author.url;
      const authorName = author.login;
      const authorAvatar = author.avatarUrl;
      const tags: string[] = labels.nodes.map((tag: { name: string }) => tag.name);
  
      console.log({labels})
      const post = {
        id,
        url,
        discussionUrl,
        title,
        html,
        bodyText,
        tags,
        createdAt,
        updatedAt,
        author: { url: authorUrl, name: authorName, avatar: authorAvatar }
      }
      return post;
    })

    return posts;
  } catch (error: any) {
    console.log("ERROR:::", error)
    return [];
  }

}

export async function getBlogDetail(blogId: number): Promise<BlogDetail> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `token ${GH_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: discussionDetailGql(blogId) }),
  });

  const res = await response.json();
  const discussion = res?.data?.repository?.discussion

  const {
    title,
    author: { url: authorUrl, login: authorName, avatarUrl: authorAvatar },
    createdAt,
    bodyHTML: html,
  } = discussion;

  const detail: BlogDetail = {
    author: { url: authorUrl, name: authorName, avatar: authorAvatar },
    createdAt,
    title,
    bodyHTML: html
  }

  return detail;
}