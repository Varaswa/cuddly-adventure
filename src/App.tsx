import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Startseite from './pages/Startseite'
import HaltungGesundheit from './pages/HaltungGesundheit'
import Herdebuch from './pages/Herdebuch'
import Veranstaltungen from './pages/Veranstaltungen'
import Finden from './pages/Finden'
import Downloads from './pages/Downloads'
import DownloadCategory from './pages/DownloadCategory'
import MeinNwks from './pages/MeinNwks'
import ArticlePage from './pages/ArticlePage'
import NichtGefunden from './pages/NichtGefunden'

const legacyZuchtSlugs: Record<string, string> = {
  nwksoft: '/herdebuch',
  herdebuch: '/herdebuch/registrierung',
}

function LegacyZuchtRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? (legacyZuchtSlugs[slug] ?? `/herdebuch/${slug}`) : '/herdebuch'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Startseite />} />
        <Route path="haltung-pflege" element={<Navigate to="/haltung-gesundheit" replace />} />
        <Route path="haltung-gesundheit" element={<HaltungGesundheit />} />
        <Route path="haltung-gesundheit/:slug" element={<ArticlePage />} />
        <Route path="herdebuch" element={<Herdebuch />} />
        <Route path="herdebuch/nwksoft" element={<Navigate to="/herdebuch" replace />} />
        <Route path="herdebuch/:slug" element={<ArticlePage />} />
        <Route path="zucht-herdebuch" element={<Navigate to="/herdebuch" replace />} />
        <Route path="zucht-herdebuch/:slug" element={<LegacyZuchtRedirect />} />
        <Route path="veranstaltungen" element={<Veranstaltungen />} />
        <Route path="finden" element={<Finden />} />
        <Route path="suche" element={<Navigate to="/finden#hoefe" replace />} />
        <Route path="tierverkauf" element={<Navigate to="/finden#tiere" replace />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="downloads/:slug" element={<DownloadCategory />} />
        <Route path="mein-nwks" element={<MeinNwks />} />
        <Route path="mein-nwks/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NichtGefunden />} />
      </Route>
    </Routes>
  )
}
