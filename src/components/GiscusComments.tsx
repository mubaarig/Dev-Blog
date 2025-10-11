// src/components/GiscusComments.tsx
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const GiscusComments: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (!ref.current) return

    // Remove existing script if any
    const existingScript = ref.current.querySelector('script')
    if (existingScript) {
      existingScript.remove()
    }

    // Create new script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'your-username/your-repo') // Replace with your repo
    script.setAttribute('data-repo-id', 'your-repo-id') // Replace with your repo ID
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', 'your-category-id') // Replace with your category ID
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', 'preferred_color_scheme')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    ref.current.appendChild(script)
  }, [location.pathname])

  return <div ref={ref} className="giscus mt-8" />
}