import { useLocation } from 'react-router-dom'
import { articleByPath } from '../content'
import SubpageLayout from '../components/ui/SubpageLayout'
import NichtGefunden from './NichtGefunden'

export default function ArticlePage() {
  const { pathname } = useLocation()
  const article = articleByPath(pathname)

  if (!article) {
    return <NichtGefunden />
  }

  return <SubpageLayout article={article} />
}
