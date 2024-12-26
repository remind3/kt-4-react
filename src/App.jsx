import React from "react";
import "./App.css";
import { Products } from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Cart} from "./pages/Cart"
import { Product } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/React-route/",
    element: <Products />,
  },
  {
    path: "/React-route/products",
    element: <Products />,
  },
  {
    path: "/React-route/products/:id",
    element: <Product />,
  },
  {
    path: "/React-route/cart",
    element: <Cart/>,
  },
  
]);

export function App() {
  return <RouterProvider router={router} />;
}
