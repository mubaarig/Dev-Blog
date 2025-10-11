// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { type BlogPost } from '../types/blog'
import { formatDate } from '../lib/utils'

// Mock data - in real app, this would come from MDX files
const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a modern React project with TypeScript, Vite, and best practices',
    date: '2024-01-15',
    published: true,
    tags: ['react', 'typescript', 'vite'],
    readingTime: '5 min read',
    wordCount: 1200,
    slug: 'getting-started-with-react',
    image: '/react-ts.jpg'
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
    slug: 'mastering-tailwind-css',
    image: '/tailwind.jpg'
  }
]

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DevBlog
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          A developer blog built with React, TypeScript, and MDX. Explore tutorials, 
          insights, and best practices in modern web development.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Blog
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readingTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
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
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              25+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Technologies Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5min
            </div>
            <div className="text-gray-600 dark:text-gray-300">Avg. Reading Time</div>
          </div>
        </div>
      </section>
    </div>
  )
}