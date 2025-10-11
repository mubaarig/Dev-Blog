// src/components/MDXComponents.tsx
import React from 'react'
import { CodeBlock } from './CodeBlock'

export const MDXComponents = {
  pre: (props: any) => {
    // If it's a code block, use our CodeBlock component
    if (props.children && typeof props.children === 'object' && 'type' in props.children && props.children.type === 'code') {
      return <CodeBlock {...props.children.props} />
    }
    // Otherwise, render as regular pre
    return <pre {...props} />
  },
  code: (props: any) => {
    // Inline code
    return (
      <code 
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" 
        {...props} 
      />
    )
  },
  img: (props: any) => (
    <img 
      {...props} 
      className="rounded-lg shadow-lg mx-auto my-6 max-w-full h-auto" 
      loading="lazy" 
      alt={props.alt || ''}
    />
  ),
  a: (props: any) => (
    <a 
      {...props} 
      className="text-blue-600 dark:text-blue-400 hover:underline font-medium" 
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 my-6"
    />
  ),
  h1: (props: any) => (
    <h1 
      {...props} 
      className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4" 
    />
  ),
  h2: (props: any) => (
    <h2 
      {...props} 
      className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4" 
    />
  ),
  h3: (props: any) => (
    <h3 
      {...props} 
      className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3" 
    />
  ),
  h4: (props: any) => (
    <h4 
      {...props} 
      className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2" 
    />
  ),
  p: (props: any) => (
    <p 
      {...props} 
      className="my-4 leading-relaxed" 
    />
  ),
  ul: (props: any) => (
    <ul 
      {...props} 
      className="list-disc list-inside my-4 space-y-2" 
    />
  ),
  ol: (props: any) => (
    <ol 
      {...props} 
      className="list-decimal list-inside my-4 space-y-2" 
    />
  ),
  li: (props: any) => (
    <li 
      {...props} 
      className="pl-2" 
    />
  ),
  table: (props: any) => (
    <table 
      {...props} 
      className="w-full border-collapse border border-gray-300 dark:border-gray-600 my-6" 
    />
  ),
  th: (props: any) => (
    <th 
      {...props} 
      className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left" 
    />
  ),
  td: (props: any) => (
    <td 
      {...props} 
      className="border border-gray-300 dark:border-gray-600 px-4 py-2" 
    />
  ),
}