import React from "react"
import { Router } from "@reach/router"
import PrivateRoutes from '../components/privateRoutes'
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/login"

const App = () => (
  <Layout>
    <Router>
      <Profile path="/app/profile" />
      <PrivateRoutes path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App