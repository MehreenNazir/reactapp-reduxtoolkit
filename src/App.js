import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cartitem from "./Pages/Cartitem/Cartitem";
import AddToFav from "./Pages/AddToFav/AddToFav";
import AddToCart from "./Pages/AddToCart/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/Cartitem",
    element: <Cartitem />,
  },
  {
    path: "/AddToCart",
    element: <AddToCart />,
  },
  {
    path: "/AddToFav",
    element: <AddToFav />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
