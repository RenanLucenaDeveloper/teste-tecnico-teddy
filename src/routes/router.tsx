import { createBrowserRouter, Outlet } from "react-router";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Clients from "../pages/Clients";
import SelectedClients from "../pages/SelectedClients";
import { ProtectedLayout } from "../layouts/protected";


export const router = createBrowserRouter([
  {
    element: <Outlet/>,
    children: [
      { path: "/login", element: <Login /> },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      { path: "/", element: <Clients /> },
      { path: "/clients", element: <Clients /> },
      { path: "/selected-clients", element: <SelectedClients /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);