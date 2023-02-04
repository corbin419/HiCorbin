import "./App.css";
import Home from "../src/Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Exp from "./Pages/Exp";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import GotoTop from "./Components/GotoTop";
import Navbar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Board from "./Pages/Board";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Exp />
      <Works />
      <Contact />
      <Footer />
      <GotoTop /> */}
      <Board />
    </div>
  );
}

export default App;
