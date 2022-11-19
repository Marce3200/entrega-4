import React from 'react'
import NavbarResto from '.NavbarResto'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
   <div className='container'>
    <nav>
    <NavbarResto/>
    </nav>
    <main>
        <Outlet/>
    </main>
    <footer>
        <Footer/>
    </footer>
   </div>
  )
}

export default Layout

