import {Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Clothes from "./pages/Clothes"
import Electronics from "./pages/Electronics"
import Furniture from "./pages/Furniture"
import Toys from "./pages/Toys"
import Cart from "./pages/Cart"
import MyAccount from "./pages/MyAccount"
import MyOrders from "./pages/MyOrders"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/Navbar"
import OrderDetail from "./pages/OrderDetail"

import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
    <div>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clothes" element={<Clothes/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/toys" element={<Toys/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/my-orders" element={<MyOrders/>}/>
        <Route path="/my-orders/:orderId" element={<OrderDetail />} />

        <Route path="*" element={<PageNotFound/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App
