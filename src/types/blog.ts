// src/types/blog.ts
export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  published: boolean
  tags: string[]
  readingTime: string
  wordCount: number
  slug: string
  image?: string
}

export interface BlogPostFrontmatter {
  title: string
  description: string
  date: string
  published?: boolean
  tags?: string[]
  image?: string
}