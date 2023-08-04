import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Notfound from "./views/Notfound";
import Services from "./views/Services";
import Hire from "./views/Hire";
import DefaultLayout from "./components/DefaultLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/hire",
        element: <Hire />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

export default Router;
