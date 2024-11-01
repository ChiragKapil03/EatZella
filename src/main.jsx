import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Reviews from './Pages/Reviews/Reviews.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Error from './Pages/Error/Error.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from './Pages/LogIn/LogIn.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import { CartProvider } from '../src/Context/CartContext.jsx';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    errorElement : <Error/>,
    children:[ 
      {
       path:"/",
       element : <Home></Home>
      },
      {
        path:"/reviews",
        element: <Reviews></Reviews>
      },
      {
       path :"/cart",
       element: <Cart></Cart>
      },
      {
        path :"/login",
       element: <LogIn />
      },
      {
        path :"/signup",
       element: <SignUp />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={appRouter}/>
  </CartProvider>
 
)
