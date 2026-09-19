import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Startseite from './pages/Startseite'
import HaltungGesundheit from './pages/HaltungGesundheit'
import ZuchtHerdebuch from './pages/ZuchtHerdebuch'
import Veranstaltungen from './pages/Veranstaltungen'
import Suche from './pages/Suche'
import Downloads from './pages/Downloads'
import DownloadCategory from './pages/DownloadCategory'
import Tierverkauf from './pages/Tierverkauf'
import MeinNwks from './pages/MeinNwks'
import ArticlePage from './pages/ArticlePage'
import NichtGefunden from './pages/NichtGefunden'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Startseite />} />
        <Route path="haltung-pflege" element={<Navigate to="/haltung-gesundheit" replace />} />
        <Route path="haltung-gesundheit" element={<HaltungGesundheit />} />
        <Route path="haltung-gesundheit/:slug" element={<ArticlePage />} />
        <Route path="zucht-herdebuch" element={<ZuchtHerdebuch />} />
        <Route path="zucht-herdebuch/:slug" element={<ArticlePage />} />
        <Route path="veranstaltungen" element={<Veranstaltungen />} />
        <Route path="suche" element={<Suche />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="downloads/:slug" element={<DownloadCategory />} />
        <Route path="tierverkauf" element={<Tierverkauf />} />
        <Route path="mein-nwks" element={<MeinNwks />} />
        <Route path="mein-nwks/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NichtGefunden />} />
      </Route>
    </Routes>
  )
}
