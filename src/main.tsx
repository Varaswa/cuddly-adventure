import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

function AppRouter() {
  const { hostname } = window.location
  if (hostname.endsWith('github.io')) {
    return (
      <BrowserRouter basename="/cuddly-adventure">
        <App />
      </BrowserRouter>
    )
  }
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
  // Static CDNs (jsDelivr, raw.githack) serve index.html from a nested path.
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
