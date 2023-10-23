import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return <div className="flex flex-col min-h-[100vh]">
    <Header />
    <Outlet />
    <Footer />
  </div>;
}

export default Layout;
