import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#3E2723]">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
