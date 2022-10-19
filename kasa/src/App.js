import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import '@/assets/style/global.scss'

import PublicRouter from '@/pages/public/PublicRouter'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </>
  )
}

export default App
