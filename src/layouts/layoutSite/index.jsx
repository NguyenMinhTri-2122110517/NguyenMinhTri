import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutSite = () => {
  return (
    <div>
      HEADER
      <Outlet/>
      FOOTER
    </div>
  )
}

export default LayoutSite
