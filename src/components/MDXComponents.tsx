// src/components/MDXComponents.tsx
import React from 'react'
import { CodeBlock } from './CodeBlock'

export const MDXComponents = {
  pre: (props: any) => {
    if (props.children?.type === 'code') {
      return <CodeBlock {...props.children.props} />
    }
    return <pre {...props} />
  },
  code: (props: any) => {
    if (props.className) {
      return <code {...props} />
    }
    return <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
  },
  img: (props: any) => (
    <img {...props} className="rounded-lg shadow-lg mx-auto" loading="lazy" />
  ),
  a: (props: any) => (
    <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 my-6"
    />
  ),
}