import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Allclasses from "../pages/Classes/AllClasses/Allclasses";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/classes',
          element:<Allclasses></Allclasses>
        }
      ]
    },
  ]);


