// src/components/Layout.tsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Search } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              DevBlog
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/blog' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/tags" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/tags' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Tags
              </Link>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
    </div>
  )
}