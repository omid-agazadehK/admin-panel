import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import PageNotFound from "../pages/404";
import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";
import PortectRoute from "@/pages/PortectRoute";

function Router() {
  return (
    <Routes>
      <Route element={<PortectRoute />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
