import React from "react"
import NavBar from "./navBar"
const Layout = ({ children }) => (
  <div>
      <NavBar/>
      <div>{children}</div>
  </div>
)
export default Layout