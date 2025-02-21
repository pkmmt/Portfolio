import React from 'react';
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import Link from 'next/link';
import Image from 'next/image';
import "@/app/ui/servicedonation/service.css";

const ServiceCard = ({ service }) => (
  <section className="card-container">
    <div className="card-main">
      <div className="card-img">
        <Image src={service.Image} alt={service.ImageAlt} width={300} height={200} objectFit="cover" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{service.Title}</h3>
        <p className="card-description">{service.Description}</p>
        <p className="card-info">{service.Date}</p>
        <p className="card-info">Pick Up Location: {service.PickUpLocation}</p>
        <p className="card-info">Drop Off Location: {service.DropOffLocation}</p>
        <div className="card-footer">
          <p className="service-type">{service.TypeOfService}</p>
          <Link href="/components/thankyou">
            <button className="btn" type="button">Volunteer</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

function Service() {
  const serviceCards = [
    {
      Image: "https://img.freepik.com/free-vector/get-supplies-without-leaving-your-car-abstract-concept-illustration-curbside-pickup-order-number-call-store-contactless-grocery-pick-up-place-order-trunk_335657-3336.jpg",
      ImageAlt: "Food Bank Delivery",
      TypeOfService: "Delivery",
      Description: "Help deliver food to those in need in your community.",
      Title: "Food Bank Delivery",
      Date: "Date: 19 May 2024",
      PickUpLocation: "Pick Up Location: Local Food Bank",
      DropOffLocation: "Drop off Location: Various Community Centers",
    },
    // Add more service cards here...
  ];

  return (
    <>
      <NavBar />
      <main className="service-page">
        <h1 className="page-title">Volunteer Opportunities</h1>
        {serviceCards.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Service;
