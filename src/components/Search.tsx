// src/components/Search.tsx
import { useState, useMemo } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { type BlogPost } from '../types/blog'

interface SearchProps {
  posts: BlogPost[]
  onResults: (results: BlogPost[]) => void
}

export const Search = ({ posts, onResults }: SearchProps) => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return posts
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
  }, [query, posts])

  const handleSearch = (value: string) => {
    setQuery(value)
    onResults(results)
  }

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={() => handleSearch('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
