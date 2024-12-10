import Footer from "./Component/Footer"
import HomePage from "./Component/HomePage/HomePage"
import Login from "./Component/Login"
import { Route, Routes } from "react-router-dom"
import SignUp from "./Component/SignUp"
import DashboardPage from "./Component/DashboardPage/DashboardPage"
import StartPage from "./Component/StartPage/StartPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App