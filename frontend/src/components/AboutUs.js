const AboutUs = () => {
  return (
    <div className="container py-3">
      <div className="text-center mb-5">
        <h1 className="fw-bold">🍽️ About Bites & Brew</h1>
        <p className="lead text-muted">
          Where every bite tells a story and every brew feels like home.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
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
