// src/pages/Blog.tsx
import React, { useState, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import { type BlogPost } from '../types/blog'
import { formatDate } from '../lib/utils'
import { Search as SearchComponent } from '../components/Search'

// Mock data - replace with actual MDX imports
const allPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a modern React project with TypeScript, Vite, and best practices',
    date: '2024-01-15',
    published: true,
    tags: ['react', 'typescript', 'vite'],
    readingTime: '5 min read',
    wordCount: 1200,
    slug: 'getting-started-with-react'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    description: 'Advanced techniques and best practices for using Tailwind CSS in production applications',
    date: '2024-01-10',
    published: true,
    tags: ['tailwind', 'css', 'frontend'],
    readingTime: '8 min read',
    wordCount: 1800,
    slug: 'mastering-tailwind-css'
  },
  {
    id: '3',
    title: 'Building a PWA with Vite',
    description: 'Step-by-step guide to building a Progressive Web App using Vite and modern web capabilities',
    date: '2024-01-05',
    published: true,
    tags: ['pwa', 'vite', 'javascript'],
    readingTime: '6 min read',
    wordCount: 1500,
    slug: 'building-pwa-with-vite'
  },
  {
    id: '4',
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns and practices for better code quality and developer experience',
    date: '2024-02-01',
    published: false, // Draft post
    tags: ['typescript', 'best-practices'],
    readingTime: '7 min read',
    wordCount: 1600,
    slug: 'typescript-best-practices'
  }
]

export const Blog: React.FC = () => {
  const { tag } = useParams<{ tag: string }>()
  const [searchResults, setSearchResults] = useState<BlogPost[]>(allPosts)

  const filteredPosts = useMemo(() => {
    let posts = searchResults.filter(post => post.published && new Date(post.date) <= new Date())
    
    if (tag) {
      posts = posts.filter(post => post.tags.includes(tag))
    }
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [searchResults, tag])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    allPosts.forEach(post => {
      if (post.published && new Date(post.date) <= new Date()) {
        post.tags.forEach(tag => tags.add(tag))
      }
    })
    return Array.from(tags).sort()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {tag ? `Posts tagged with "${tag}"` : 'Blog Posts'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {tag 
              ? `Exploring ${tag} through tutorials, insights, and best practices`
              : 'Latest articles on web development, programming, and technology'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="w-full lg:w-96">
              <SearchComponent posts={allPosts} onResults={setSearchResults} />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tagItem => (
                <Link
                  key={tagItem}
                  to={tagItem === tag ? '/blog' : `/tags/${tagItem}`}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    tagItem === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Tag size={14} className="mr-1" />
                  {tagItem}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.description}
                    </p>

                    <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readingTime}
                      </div>
                      <div className="flex items-center">
                        <span>{post.wordCount} words</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/tags/${tag}`}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 lg:mt-0 lg:ml-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors self-start"
                  >
                    Read Post
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {tag 
                ? `No published posts found with the tag "${tag}".`
                : 'No blog posts match your search criteria.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}