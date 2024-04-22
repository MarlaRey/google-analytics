import React from 'react'
import {Link, Outlet} from "react-router-dom"

export const Layout = () => {
  return (
    <div><nav>nav</nav>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
