import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import AuthContextProvider from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import Payment from "./Components/Payment/Payment";
import AllOrders from "./Components/AllOrders/AllOrders";
import Categories from "./Components/Categories/Categories";
import SubCategories from "./Components/SubCategories/SubCategories";
import Brands from "./Components/Brands/Brands";
import WishContextProvider from "./Context/WishContext";
import WishList from "./Components/WishList/WishList";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import VerifyCode from "./Components/VerifyCode/VerifyCode";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

function App() {

  const x = new QueryClient();

  const route = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <ProtectedRoute><Home/></ProtectedRoute> },
        { path: "/cart", element: <ProtectedRoute><Cart /></ProtectedRoute>  },
        { path: "/productDetails/:id", element: <ProtectedRoute><ProductDetails /></ProtectedRoute>  },
        { path: "/payment", element: <ProtectedRoute><Payment /></ProtectedRoute>  },
        { path: "/allorders", element: <ProtectedRoute><AllOrders /></ProtectedRoute>  },
        { path: "/categories", element: <ProtectedRoute><Categories /></ProtectedRoute>  },
        { path: "/subcategories/:id", element: <ProtectedRoute><SubCategories /></ProtectedRoute>  },
        { path: "/brands", element: <ProtectedRoute><Brands /></ProtectedRoute>  },
        { path: "/wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute>  },
        
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register/> },
        { path: "/forgetpassword", element: <ForgetPassword/> },
        { path: "/verifycode", element: <VerifyCode/> },
        { path: "/resetpassword", element: <ResetPassword/> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={x}>
    <AuthContextProvider>
      <WishContextProvider>
      <CartContextProvider>
      <Toaster/>
      <RouterProvider router={route} />
      </CartContextProvider>
      </WishContextProvider>
    </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
