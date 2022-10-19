import { Routes, Route } from 'react-router-dom'

import Home from '@/pages/public/Home'
import About from '@/pages/public/About'
import Hosting from '@/pages/public/Hosting'

import Error from '@/components/Error'
import Layout from '@/pages/public/Layout'

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="hosting/:id" element={<Hosting />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter
