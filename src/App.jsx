import Footer from "./Component/Footer"
import HomePage from "./Component/HomePage/HomePage"
import Login from "./Component/Login"
import { Route, Routes } from "react-router-dom"
import SignUp from "./Component/SignUp"
import StartPage from "./Component/StartPage/StartPage"
import AdminPage from "./Component/AdminPage/AdminPage"
import UserProfile from "./Component/UserPage/UserProfile"
import Cart from "./Component/CartPage.jsx/Cart"
import OrderPage from "./Component/UserPage/OrderPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App