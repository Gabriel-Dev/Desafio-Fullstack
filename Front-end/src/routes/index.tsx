import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
