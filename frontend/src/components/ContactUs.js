import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "147bb479-3077-4919-95f5-fbae9b8209d4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        form.reset();
      } else {
        console.log("Error:", data);
        setResult("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">📞 Contact Us</h1>
          <p className="lead text-muted">
            We’d love to hear from you! Reach out anytime.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Get in Touch</h4>
            <p>
              <strong>📍 Address:</strong> Main Road, Ranchi, Jharkhand – 834001
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>📧 Email:</strong> support@bitesandbrew.com
            </p>
            <p>
              <strong>🕒 Open Hours:</strong> 10 AM - 10 PM (All Days)
            </p>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
            {result && (
              <p
                className={`mt-3 ${
                  result.startsWith("✅") ? "text-success" : "text-danger"
                }`}
              >
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
