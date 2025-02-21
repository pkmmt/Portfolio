"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import "@/app/ui/donationform/donationform.css";

function DonationForm() {
  const [formData, setFormData] = useState({
    typeOfGoods: "",
    numberOfGoods: "",
    deliveryMethod: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.typeOfGoods.trim()) {
      newErrors.typeOfGoods = "Type of goods is required";
    }
    if (!formData.numberOfGoods) {
      newErrors.numberOfGoods = "Number of goods is required";
    }
    if (!formData.deliveryMethod) {
      newErrors.deliveryMethod = "Please select a delivery method";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // You can add your form submission logic here
      window.location.href = "/components/thankyou";
    }
  };

  return (
    <>
      <NavBar />
      
      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-content">
            <h1 className="banner-title">
              <span>Donation Form</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="form-wrapper">
        <div className="donation-form-container">
          <h2 className="form-title">Make a Donation</h2>
          
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-group">
              <label htmlFor="typeOfGoods">Type of Goods</label>
              <input
                type="text"
                id="typeOfGoods"
                name="typeOfGoods"
                value={formData.typeOfGoods}
                onChange={handleChange}
                placeholder="Enter type of goods"
              />
              {errors.typeOfGoods && <span className="error">{errors.typeOfGoods}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numberOfGoods">Number of Goods</label>
              <input
                type="number"
                id="numberOfGoods"
                name="numberOfGoods"
                value={formData.numberOfGoods}
                onChange={handleChange}
                placeholder="Enter quantity"
                min="1"
              />
              {errors.numberOfGoods && <span className="error">{errors.numberOfGoods}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="deliveryMethod">Delivery Method</label>
              <select
                id="deliveryMethod"
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleChange}
              >
                <option value="">Select Delivery Method</option>
                <option value="pickup">Pickup</option>
                <option value="dropoff">Dropoff</option>
              </select>
              {errors.deliveryMethod && <span className="error">{errors.deliveryMethod}</span>}
            </div>

            <button type="submit" className="submit-button">
              Submit Donation
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DonationForm;