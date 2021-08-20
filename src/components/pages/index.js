import React from "react";
import Footer from "../Footer/Footer";
import { NewsLetter } from "../NewLetter/NewLetter";
import Navbar from "../navbar";

const Home = () => {
  return (
    <section>
      <NewsLetter />
      <Footer />
    </section>
  );
  
};

export default Home;
