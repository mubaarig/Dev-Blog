// src/components/CodeBlock.tsx
import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  children: string
  className?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false)
  const language = className?.replace('language-', '') || 'text'

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-800 dark:bg-gray-700 rounded text-white text-sm flex items-center space-x-1"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={className}>{children}</code>
      </pre>
      
      <div className="absolute top-2 left-2">
        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
          {language}
        </span>
      </div>
    </div>
  )
}