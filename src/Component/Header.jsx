import React from "react";
import "../style/Header.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Booking from "./Booking";

function Header() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <span className="material-symbols-outlined he">local_taxi</span> 
          <a className="navbar-brand size" href="#">
            My Car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse a"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item font">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item font">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item font">
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>

              <li className="nav-item font">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-success my-2 my-sm-0 font " type="submit">
            <Link to="/booking" className="nav-link  text-light">
              Book Now
            </Link>
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;
