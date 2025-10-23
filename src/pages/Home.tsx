// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  Code2, 
  Shield, 
  Zap, 
  Users,
  BookOpen,
  Star,
  TrendingUp
} from 'lucide-react'
import {type BlogPost } from '../types/blog'
import { formatDate } from '../lib/utils'

// Mock data
const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a modern React project with TypeScript, Vite, and best practices for scalable applications.',
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
    description: 'Advanced techniques and best practices for using Tailwind CSS in production applications with dark mode support.',
    date: '2024-01-10',
    published: true,
    tags: ['tailwind', 'css', 'frontend'],
    readingTime: '8 min read',
    wordCount: 1800,
    slug: 'mastering-tailwind-css',
    image: '/tailwind.jpg'
  },
  {
    id: '3',
    title: 'Building a PWA with Vite',
    description: 'Step-by-step guide to building a Progressive Web App using Vite and modern web capabilities for offline support.',
    date: '2024-01-05',
    published: true,
    tags: ['pwa', 'vite', 'javascript'],
    readingTime: '6 min read',
    wordCount: 1500,
    slug: 'building-pwa-with-vite',
    image: '/vite-pwa.jpg'
  }
]

const features = [
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Built with React, TypeScript, Vite, and Tailwind CSS for the best developer experience.'
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Full TypeScript support ensures type safety and better code quality throughout the application.'
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    description: 'Optimized performance with Vite, image optimization, and efficient bundling for quick load times.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Open source and community focused with GitHub discussions and contributor-friendly setup.'
  }
]

const stats = [
  { label: 'Articles Published', value: '25+' },
  { label: 'Technologies Covered', value: '15+' },
  { label: 'Avg. Reading Time', value: '5 min' },
  { label: 'Happy Readers', value: '1K+' }
]

export const Home: React.FC = () => {
  return (
    <div className="flex-1">
     
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900/20 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Modern Developer Blog Platform
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Write. Share.{' '}
              <span className="bg-gradient-to-r from-gray-900 to-black-black bg-clip-text text-transparent">
                Inspire.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A beautiful, modern blog built with React, TypeScript, and MDX. 
              Perfect for developers who want to share their knowledge with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Articles
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Code2 size={20} className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose This Blog?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern technologies and developer experience in mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Latest insights and tutorials on modern web development
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center mt-6 lg:mt-0 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
              View All Articles
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar size={16} className="mr-1" />
                    {formatDate(post.date)}
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-1" />
                    {post.readingTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Reading?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our collection of articles, tutorials, and insights on modern web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <TrendingUp size={20} className="mr-2" />
                Browse All Articles
              </Link>
              <Link
                to="/tags"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <Tag size={20} className="mr-2" />
                Explore by Tags
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
