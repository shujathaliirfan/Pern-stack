import React from "react";

import Header from "./app/Header/index";
import Footer from "./app/Footer/index";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
