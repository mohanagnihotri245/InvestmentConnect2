import React from "react"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";

import Home from "../pages/Home/Home";
import Add from "../pages/add/Add";
import Basket from "../pages/basket/Basket";
import Baskets from "../pages/baskets/Baskets";
import Message from "../pages/message/Message";
import Messages from "../pages/messages/Messages";
import Orders from "../pages/orders/Orders";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MyBaskets from "../pages/myBaskets/MyBaskets"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

function App() {

  const Layout = () => {
    return(
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    )
  }

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/basket/:id",
          element : <Basket/>
        },
        {
          path : "/baskets",
          element : <Baskets/>
        },
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/messages",
          element : <Messages/>
        },
        {
          path : "/message/:id",
          element : <Message/>
        },
        {
          path : "/orders",
          element : <Orders/>
        },
        {
          path : "/register",
          element : <Register/>
        },
        {
          path : "/myBuckets",
          element : <MyBaskets/>
        },
        {
          path : "/add",
          element : <Add/>
        },
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App