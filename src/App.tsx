import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Startseite from './pages/Startseite'
import HaltungGesundheit from './pages/HaltungGesundheit'
import ZuchtHerdebuch from './pages/ZuchtHerdebuch'
import Veranstaltungen from './pages/Veranstaltungen'
import Suche from './pages/Suche'
import Downloads from './pages/Downloads'
import Tierverkauf from './pages/Tierverkauf'
import MeinNwks from './pages/MeinNwks'
import NichtGefunden from './pages/NichtGefunden'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Startseite />} />
        <Route path="haltung-gesundheit" element={<HaltungGesundheit />} />
        <Route path="zucht-herdebuch" element={<ZuchtHerdebuch />} />
        <Route path="veranstaltungen" element={<Veranstaltungen />} />
        <Route path="suche" element={<Suche />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="tierverkauf" element={<Tierverkauf />} />
        <Route path="mein-nwks" element={<MeinNwks />} />
        <Route path="*" element={<NichtGefunden />} />
      </Route>
    </Routes>
  )
}
