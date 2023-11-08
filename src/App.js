import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cartitem from "./Pages/Cartitem/Cartitem";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
