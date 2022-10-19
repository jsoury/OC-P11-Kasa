import { Outlet } from 'react-router-dom'

import Container from '@/components/Container'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const Layout = (props) => {
  return (
    <>
      <Container>
        <Nav />
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
