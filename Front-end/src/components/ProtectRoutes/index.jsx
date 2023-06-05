import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ClientContext } from "../../contexts/ClientContext";

export function ProtectRoutes() {
  const { loading, client } = useContext(ClientContext);
  
  if (loading) {
    return null;
  }
  
  return client ? <Outlet /> : <Navigate to="/" />
}
