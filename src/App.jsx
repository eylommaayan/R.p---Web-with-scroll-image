import React from "react";
import Intro from "../src/components/Intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </>
  );
}

export default App;
