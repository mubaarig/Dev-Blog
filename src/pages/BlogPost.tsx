// src/pages/BlogPost.tsx
import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from '../components/MDXComponents'
import { TableOfContents } from '../components/TableOfContents'
import { formatDate } from '../lib/utils'
import { GiscusComments } from './../components/GiscusComments'

// Simple MDX content component for demo
const DemoMDXContent: React.FC = () => {
  return (
    <div className="prose prose-lg dark:prose-dark max-w-none">
      <h2>Why TypeScript?</h2>
      
      <p>TypeScript brings static type checking to JavaScript, helping catch errors early and improving developer experience.</p>

      <p>Here's an example of a TypeScript interface:</p>

      <pre><code className="language-typescript">{`interface User {
  id: number
  name: string
  email: string
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}`}</code></pre>

      <h2>Project Setup</h2>

      <p>First, create a new Vite project:</p>

      <pre><code className="language-bash">{`npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install`}</code></pre>

      <h3>Key Features</h3>

      <ul>
        <li><strong>Fast Development</strong>: Vite provides instant server start</li>
        <li><strong>Type Safety</strong>: TypeScript catches errors at compile time</li>
        <li><strong>Modern Tooling</strong>: ESLint, Prettier, and more</li>
      </ul>

      <blockquote>
        This is a blockquote demonstrating the styling of quoted text in the blog post.
      </blockquote>

      <h2>Conclusion</h2>

      <p>React with TypeScript provides a robust foundation for building scalable applications. The type safety and modern tooling significantly improve developer productivity and code quality.</p>
    </div>
  )
}

// Mock post data
const mockPost = {
  id: '1',
  title: 'Getting Started with React and TypeScript',
  description: 'Learn how to set up a modern React project with TypeScript, Vite, and best practices',
  date: '2024-01-15',
  published: true,
  tags: ['react', 'typescript', 'vite'],
  readingTime: '5 min read',
  wordCount: 1200,
  slug: 'getting-started-with-react'
}

// Extract headings from content
const mockHeadings = [
  { id: 'why-typescript', text: 'Why TypeScript?', level: 2 },
  { id: 'project-setup', text: 'Project Setup', level: 2 },
  { id: 'key-features', text: 'Key Features', level: 3 },
  { id: 'conclusion', text: 'Conclusion', level: 2 }
]

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  if (!mockPost) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all posts
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {mockPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {mockPost.description}
              </p>
              
              <div className="flex items-center flex-wrap gap-4 text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />
                  {formatDate(mockPost.date)}
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2" />
                  {mockPost.readingTime}
                </div>
                <div className="flex items-center">
                  <span>{mockPost.wordCount} words</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {mockPost.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tags/${tag}`}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </header>

            {/* MDX Content */}
            <div className="prose prose-lg dark:prose-dark max-w-none">
              <MDXProvider components={MDXComponents}>
                <DemoMDXContent />
              </MDXProvider>
            </div>

            {/* Comments */}
            <div className="mt-16">
              <GiscusComments />
            </div>
          </article>

          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents headings={mockHeadings} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}