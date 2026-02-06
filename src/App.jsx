import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Drawer from "./component/Drawer";
import Loding from "./component/loding";
import Kbd from "./component/Kbd";

export default function App() {
  return (
    <>
      <Drawer />
      <Header />
      <Hero />
      <Loding />
      <Kbd />
      <Main />
      <Footer />    </>
  );
}
