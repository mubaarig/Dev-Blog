// src/pages/Tags.tsx
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Hash } from 'lucide-react'
import { type BlogPost } from '../types/blog'

// Mock data
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
  }
]

export const Tags: React.FC = () => {
  const tagsWithCounts = useMemo(() => {
    const tagCounts: Record<string, number> = {}
    
    allPosts.forEach(post => {
      if (post.published && new Date(post.date) <= new Date()) {
        post.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
      }
    })
    
    return Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Tag className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Tags
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore blog posts by topics and technologies
          </p>
        </div>

        {/* Tags Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tagsWithCounts.map(({ tag, count }) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Hash size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tag}
                  </span>
                </div>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {count}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {count} post{count !== 1 ? 's' : ''} about {tag}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {tagsWithCounts.length === 0 && (
          <div className="text-center py-12">
            <Tag size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No tags yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tags will appear here once you start publishing posts with tags.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}