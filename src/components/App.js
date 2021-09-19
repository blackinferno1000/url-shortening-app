import React from "react";
import { hot } from "react-hot-loader";
import "../App.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Search from "./Search.js";
import Stats from "./Stats.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <Stats />
      <Footer />
    </div>
  );
}

export default hot(module)(App);

