// scripts/generate-sitemap.js
import { writeFileSync } from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'

const posts = await glob('./src/content/posts/**/*.mdx')

const allPosts = await Promise.all(
  posts.map(async (post) => {
    const content = await import(`../${post}?raw`)
    const { data } = matter(content.default)
    
    return {
      ...data,
      slug: post.split('/').pop().replace('.mdx', '')
    }
  })
)

const publishedPosts = allPosts
  .filter(post => post.published && new Date(post.date) <= new Date())

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/blog</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/tags</loc>
    <priority>0.7</priority>
  </url>
  ${publishedPosts.map(post => `
    <url>
      <loc>https://yourdomain.com/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
      <priority>0.9</priority>
    </url>
  `).join('')}
</urlset>`

writeFileSync('./dist/sitemap.xml', sitemap)