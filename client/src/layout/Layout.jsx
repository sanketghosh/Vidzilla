import { Navbar, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-100 text-gray-700 h-screen">
      <div className="flex max-w-7xl mx-auto px-3 gap-6">
        <Sidebar />
        <main className="flex-[7] flex flex-col gap-3 bg-green-600">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
