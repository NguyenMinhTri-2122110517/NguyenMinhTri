import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const LayoutAdmin = () => {
  return (
    <>
      <Header/>
      <section className='maincontent p-3'>
        <Outlet/>
      </section>
      <Footer/>
    </>
  )
}

export default LayoutAdmin
