import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">🍽️ About Bites & Brew</h1>
        <p className="lead text-muted">
          Where every bite tells a story and every brew feels like home.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Restaurant"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Journey</h3>
          <p className="text-muted">
            Founded in 2024, Bites & Brew started as a small café in Ranchi with
            a passion for great food and warm ambiance. We've grown into a
            beloved dining destination known for delicious meals, cozy
            interiors, and unforgettable experiences.
          </p>
          <p className="text-muted">
            From mouth-watering appetizers to refreshing drinks, our menu is a
            blend of tradition and innovation. We’re not just about food—we’re
            about community, joy, and hospitality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
