// src/components/MDXComponents.tsx
import { isValidElement, type ComponentPropsWithoutRef, type ElementType } from 'react'

import { CodeBlock } from './CodeBlock'

const withClasses = (base: string, className?: string) =>
  className ? `${base} ${className}` : base

type ElementProps<Tag extends ElementType> = ComponentPropsWithoutRef<Tag>

export const MDXComponents = {
  pre: ({ children, ...rest }: ElementProps<'pre'>) => {
    if (isValidElement<ElementProps<'code'>>(children) && children.type === 'code') {
      const codeProps = children.props as ElementProps<'code'>

      if (typeof codeProps.children === 'string') {
        return <CodeBlock className={codeProps.className}>{codeProps.children}</CodeBlock>
      }
    }

    return <pre {...rest}>{children}</pre>
  },
  code: ({ className, ...rest }: ElementProps<'code'>) => (
    <code
      className={withClasses(
        'bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono',
        className
      )}
      {...rest}
    />
  ),
  img: ({ className, alt = '', ...rest }: ElementProps<'img'>) => (
    <img
      {...rest}
      className={withClasses(
        'rounded-lg shadow-lg mx-auto my-6 max-w-full h-auto',
        className
      )}
      loading="lazy"
      alt={alt}
    />
  ),
  a: ({ className, ...rest }: ElementProps<'a'>) => (
    <a
      {...rest}
      className={withClasses(
        'text-blue-600 dark:text-blue-400 hover:underline font-medium',
        className
      )}
    />
  ),
  blockquote: ({ className, ...rest }: ElementProps<'blockquote'>) => (
    <blockquote
      {...rest}
      className={withClasses(
        'border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 my-6',
        className
      )}
    />
  ),
  h1: ({ className, ...rest }: ElementProps<'h1'>) => (
    <h1
      {...rest}
      className={withClasses(
        'text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4',
        className
      )}
    />
  ),
  h2: ({ className, ...rest }: ElementProps<'h2'>) => (
    <h2
      {...rest}
      className={withClasses(
        'text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4',
        className
      )}
    />
  ),
  h3: ({ className, ...rest }: ElementProps<'h3'>) => (
    <h3
      {...rest}
      className={withClasses(
        'text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3',
        className
      )}
    />
  ),
  h4: ({ className, ...rest }: ElementProps<'h4'>) => (
    <h4
      {...rest}
      className={withClasses(
        'text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2',
        className
      )}
    />
  ),
  p: ({ className, ...rest }: ElementProps<'p'>) => (
    <p
      {...rest}
      className={withClasses('my-4 leading-relaxed', className)}
    />
  ),
  ul: ({ className, ...rest }: ElementProps<'ul'>) => (
    <ul
      {...rest}
      className={withClasses('list-disc list-inside my-4 space-y-2', className)}
    />
  ),
  ol: ({ className, ...rest }: ElementProps<'ol'>) => (
    <ol
      {...rest}
      className={withClasses('list-decimal list-inside my-4 space-y-2', className)}
    />
  ),
  li: ({ className, ...rest }: ElementProps<'li'>) => (
    <li
      {...rest}
      className={withClasses('pl-2', className)}
    />
  ),
  table: ({ className, ...rest }: ElementProps<'table'>) => (
    <table
      {...rest}
      className={withClasses(
        'w-full border-collapse border border-gray-300 dark:border-gray-600 my-6',
        className
      )}
    />
  ),
  th: ({ className, ...rest }: ElementProps<'th'>) => (
    <th
      {...rest}
      className={withClasses(
        'border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left',
        className
      )}
    />
  ),
  td: ({ className, ...rest }: ElementProps<'td'>) => (
    <td
      {...rest}
      className={withClasses(
        'border border-gray-300 dark:border-gray-600 px-4 py-2',
        className
      )}
    />
  ),
}
