import { Navigate, Outlet } from "react-router";
import { useAuthData } from "../store/auth";
import Header from "../components/Header";
import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";

export function ProtectedLayout() {
  const { isAuthenticated } = useAuthData();
  const [sidebarStatus, setSidebarStatus] = useState(false)

  const userName = useMemo<string>(() => {
      let storage = localStorage.getItem('user') 
      return storage ? JSON.parse(storage).state.user.name : ''
  }, [])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>
    <Header userName={userName} setSidebarStatus={ setSidebarStatus }/>
    <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={ setSidebarStatus }/>
    <div className="w-full pt-21">
      <Outlet/>
    </div>
  </>;
}