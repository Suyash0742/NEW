import React from "react";
import "../style/About.css";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid backgoundimg text-center mt-5">
        <div className="container">
          <h1 className="display-3 bold">Welcome To My Car </h1>
          <p className="text-light">
            Explore the World with My Cars and turn every journey into an
            unforgettable adventure. Our car tour service offers comfortable,
            stylish, and reliable vehicles that let you travel freely and
            discover beautiful destinations at your own pace. Whether you want
            to drive through scenic mountain roads, relax along stunning coastal
            highways, or explore vibrant cities, our carefully selected cars
            provide the perfect travel experience. With easy booking, flexible
            tour options, and well-maintained vehicles, we make sure every trip
            is smooth, exciting, and memorable. Start your adventure today and
            experience the joy of traveling with the perfect car.
          </p>
        </div>
      </div>

      <section>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                 <span class="material-symbols-outlined mr-2">psychology_alt</span>
                <h5 className="card-title">
                  Expert travel recommendations
                </h5>
                <p className="card-text">
                  Our team provides expert travel recommendations to help you
                  discover the best destinations, attractions, and experiences
                  around the world
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <span class="material-symbols-outlined mr-2">money_bag</span>
                <h5 className="card-title">
                  Budget-friendly options
                </h5>
                <p className="card-text">
                  We offer budget-friendly travel options so everyone can
                  explore amazing destinations without spending too much. From
                  affordable hotels to low-cost travel packages, we help you
                  plan trips that fit your budget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <span className="material-symbols-outlined mr-2">hotel</span>
                <h5 className="card-title">
                  Verified hotels and tours
                </h5>
                <p className="card-text">
                  All hotels and tour packages on our platform are carefully
                  verified to ensure quality, safety, and comfort. We work with
                  trusted partners so you can book your travel with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <i className="bi bi-stopwatch"></i>
                <h5 className="card-title">
               24/7 support
                </h5>
                <p className="card-text">
                  Our customer support team is available 24/7 to assist you with
                  bookings, travel questions, or any issues during your trip. We
                  are always ready to help make your travel experience smooth
                  and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
