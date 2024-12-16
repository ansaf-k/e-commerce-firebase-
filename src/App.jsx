import Footer from "./Component/Footer"
import HomePage from "./Component/HomePage/HomePage"
import Login from "./Component/Login"
import { Route, Routes } from "react-router-dom"
import SignUp from "./Component/SignUp"
import AdminPage from "./Component/AdminPage/AdminPage"
import UserProfile from "./Component/UserPage/UserProfile"
import Cart from "./Component/CartPage.jsx/Cart"
import OrderPage from "./Component/UserPage/OrderPage"
import ProtectedRoute from "./utilis/ProtectedRoute"
import Start from "./Component/Start/Start"


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Start />} />

        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        } />

        <Route path="/user" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />

        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        } />

      </Routes>
      <Footer />
    </>
  )
}

export default App