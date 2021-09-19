import './App.css';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Search from "./components/Search.js";
import Stats from "./components/Stats.js";
import Footer from "./components/Footer.js";

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

export default App;
