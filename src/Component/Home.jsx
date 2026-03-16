import React from "react";
import "../style/Home.css";
import car1 from "../assets/car1.jfif";
import place from "../assets/place.jfif";
import map from "../assets/Map.jfif";
import Tajmahal from "../assets/Taj Mahal.jfif";
import malaysi from "../assets/Malaysi.jfif";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Carousel */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={car1} className="d-block w-100" alt="car" />
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src={place} className="d-block w-100" alt="place" />
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src={map} className="d-block w-100" alt="map" />
          </div>
        </div>
      </div>

      {/* Tourist Places */}
      <section className="mt-5 mx-3">
        <h1>Tourist Places</h1>

        <div className="card-deck mt-5 d-flex gap-3">
          {/* Switzerland */}
          <div className="card hover">
            <img src={place} className="card-img-top h-75" alt="place" />
            <div className="card-body">
              <h5 className="card-title">Switzerland</h5>
              <p className="card-text">
                Switzerland is a landlocked, mountainous country in Central
                Europe known for its political neutrality, high standard of
                living, and stunning natural landscapes.
              </p>
            </div>
            <Link to="/Booking" className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>

          {/* Taj Mahal */}
          <div className="card hover">
            <img src={Tajmahal} className="card-img-top h-75" alt="Taj Mahal" />
            <div className="card-body">
              <h5 className="card-title">Taj Mahal</h5>
              <p className="card-text">
                The Taj Mahal is a world-renowned white marble mausoleum in
                Agra, India, celebrated as an icon of love and a masterpiece of
                Mughal architecture.
              </p>
            </div>
            <Link to="/Booking" className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>

          {/* Malaysia */}
          <div className="card hover">
            <img src={malaysi} className="card-img-top h-75" alt="Malaysia" />
            <div className="card-body">
              <h5 className="card-title">Malaysia</h5>
              <p className="card-text">
                Malaysia is one beautiful country to explore, with some
                world-class beaches, beautiful scenery and vibrant cities. Kuala
                Lumpur is one of its most famous destinations.
              </p>
            </div>
            <Link to="/Booking" className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
