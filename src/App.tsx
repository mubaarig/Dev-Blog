// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Tags } from './pages/Tags'
import {About} from './pages/About'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<Blog />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App