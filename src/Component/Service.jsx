import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "../style/Service.css";
import place from "../assets/place.jfif";
import Tajmahal from "../assets/Taj Mahal.jfif";
import malaysi from "../assets/Malaysi.jfif";
import Footer from "./Footer";

function Service() {
  return (
    <div>
      <div className="jumbotron text-center backgound mt-5">
        <h1 className="display-4 bold">My Car – Your Journey Starts Here</h1>
        <p className="bold2">
          Find the perfect car, discover new models, and enjoy a smooth driving
          experience with My Car.
        </p>
        {/* Jumbotron button routing */}
        <Link to="/Booking">
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>

      <section>
        <h1>Tourist places with packages</h1>
        <div className="card-deck mt-5 mx-3">
          {/* Switzerland Card */}
          <div className="card">
            <img src={place} className="card-img-top h-75" alt="place" />
            <div className="card-body pt-3">
              <h5 className="card-title">Switzerland</h5>
              <p className="card-text">
                Switzerland is a landlocked, mountainous country in Central
                Europe known for its political neutrality, high standard of
                living, and stunning natural landscapes.
              </p>
            </div>
            <div className="pl-5">
              <h3>Total Package : ₹50,000</h3>
            </div>
            {/* Card button routing */}
          <Link to="/Booking"className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>

          {/* Taj Mahal Card */}
          <div className="card">
            <img src={Tajmahal} className="card-img-top h-75" alt="Taj Mahal" />
            <div className="card-body">
              <h5 className="card-title">Taj Mahal</h5>
              <p className="card-text">
                The Taj Mahal is a world-renowned white marble mausoleum in
                Agra, India, celebrated as an icon of love and a masterpiece of
                Mughal architecture.
              </p>
            </div>
            <div className="pl-5">
              <h3>Total Package : ₹10,000</h3>
            </div>
            <Link to="/Booking"className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>

          {/* Malaysia Card */}
          <div className="card">
            <img src={malaysi} className="card-img-top h-75" alt="Malaysia" />
            <div className="card-body">
              <h5 className="card-title">Malaysia</h5>
              <p className="card-text">
                Malaysia is one beautiful country to explore, with some
                world-class beaches, beautiful scenery and vibrant cities... and
                guess what, Kuala Lumper is no exception
              </p>
            </div>
            <div className="pl-5">
              <h3>Total Package : ₹55,000</h3>
            </div>
           <Link to="/Booking"className="text-center mb-3">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Service;