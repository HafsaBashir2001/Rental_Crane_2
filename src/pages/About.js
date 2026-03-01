import React from "react";

export default function About() {
  const testimonials = [
    {
      name: "abc",
      text: "Sky Cranes provided outstanding crane rental services. The team was professional and punctual, ensuring smooth operations at our construction site.",
      image: "/images/user1.jpeg"
    },
    {
      name: "def",
      text: "Their machinery was in excellent condition, and the operators were skilled and safety-focused. Highly recommended for heavy lifting solutions!",
      image: "/images/user2.avif"
    },
    {
      name: "fgh",
      text: "Very reliable and responsive team. The transport service for heavy machinery was seamless and hassle-free.",
      image: "/images/user3.avif"
    }
  ];

  return (
    <>
    <div className="allhead">

      {/* About Section */}
      <h1 className="text-center heading mt-5 fw-bold">About Us</h1>
      <div className="d-flex flex-column flex-md-row align-items-center m-5">
        <img
          className="border rounded mb-3 mb-md-0"
          src="/images/crane3.jpeg"
          alt="About Sky Cranes"
          style={{ maxWidth: "350px", height: "auto" }}
        />
        <p className="text-left m-3 fs-5">
          At <b>Rental Crane Services</b>, we believe every project deserves safe and efficient lifting solutions. 
          Our passion lies in delivering reliable crane rentals, heavy machinery transport, and 
          expert support for construction and industrial needs. With a strong commitment to quality, 
          safety, and client satisfaction, Rental Crane Services is your trusted partner in building success.
        </p>
      </div>
      </div>

      {/* Testimonials Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100 text-center p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p className="fs-6 text-muted">"{item.text}"</p>
                <h6 className="fw-bold mt-3">{item.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
