export interface BlogDetail {
  title: string
  bodyHTML: string
  createdAt: string
  author: Author
}

export interface BlogPost {
  id?: number
  url?: string
  discussionUrl?: string
  title: string
  html?: string
  bodyText?: string
  tags: string[]
  createdAt?: string
  updatedAt?: string
  author?: Author
}

export interface Author {
  url?: string
  name?: string
  avatar?: string
}