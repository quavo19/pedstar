import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

