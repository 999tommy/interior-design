
// local imports

import Care from "./views/Care";
import Footer from "./views/Footer";
import Hero from "./views/Hero";
import Products from "./views/Products";
import Reference from "./views/Reference";
import Services from "./views/Services";
import "./index.css";
function Interior() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Reference />
      <Care />
      <Footer />
    </>
  );
}

export default Interior;
