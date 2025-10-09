import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import CardDetails from "../Component/CardDetails/CardDetails";
import Installation from "../Pages/Installation/Installation";
import Error from "../Pages/ErrorPages/ErrorPages";
import ErrorApps from "../Component/ErrorApps/ErrorApps";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps/*",
        Component: Apps,
        children: [
          {
            path: "*",
            Component: ErrorApps,
          },
        ],
        // errorElement: <ErrorApps></ErrorApps>,
      },
      {
        path: "card/:id",
        Component: CardDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

export default router;
