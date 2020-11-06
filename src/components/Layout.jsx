import React from "react";
import HeaderBar from "./Header/HeaderBar";
const Layout = ({ children }) => (
  <div>
    <HeaderBar />
    {children}
  </div>
);

export default Layout;
