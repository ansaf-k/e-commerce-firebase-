import Footer from "./Component/Footer"
import HomePage from "./Component/HomePage/HomePage"
import Navbar from "./Component/Navbar"

import Login from "./Component/Login"
import { Route, Routes } from "react-router-dom"
import SignIn from "./Component/SignIn"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App