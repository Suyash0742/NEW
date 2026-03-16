import React, { useState } from "react";
import '../style/Booking.css'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    carType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details:", formData);
    alert("Your booking request has been submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickup: "",
      dropoff: "",
      date: "",
      carType: "",
    });
  };

  return (
    <section className="booking-section pt-5">
      <h2>Book Your Tour</h2>
      <p>Fill out the form below to reserve your tourist car.</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={formData.dropoff}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          required
        >
          <option value="">Select Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="van">Van</option>
          <option value="luxury">Luxury</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;