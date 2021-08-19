import React from "react";
import Footer from "../Footer/Footer";
import { NewsLetter } from "../NewLetter/NewLetter";
import Navbar from "../navbar";

const Home = () => {
  return (
    <section>
      <Navbar />
      <h1>Welcome to our website!</h1>);
      <NewsLetter />
      <Footer />
    </section>
  );
  
};

export default Home;
