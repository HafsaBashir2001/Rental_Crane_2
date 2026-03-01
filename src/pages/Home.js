import React from "react";

export default function Home() {
  const images = [
    "/images/crane1.jpeg",
    "/images/crane2.jpeg",
    "/images/crane3.jpeg",
    "/images/crane4.jpeg",
    "/images/crane5.jpeg",
  ];

  const ourCrane = [
    { image: "/images/crane6.png", name: "Truck Crane" },
    { image: "/images/crane7.png", name: "All Terrain Crane" },
    { image: "/images/crane8.png", name: "Rough Terrain Crane" },
    { image: "/images/crane9.png", name: "Truck Mounted Crane" },
    { image: "/images/crane10.png", name: "Crawler Crane" },
    { image: "/images/crane11.png", name: "Tower Crane" },
    { image: "/images/crane12.png", name: "Loader Crane" }
  ];

  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img
                src={img}
                className="cimg d-block w-100 img-fluid"
                alt={`slide-${index}`}
                style={{ height: "70vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Hero Text */}
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10">
            <h1 className="fw-bold">Sky Crane</h1>
            <p className="mt-3 fs-5">
              "Heavy Lifting Made Easy with Sky Crane Solutions”
              <br />
              Reliable crane rental and lifting services for industries,
              construction, and logistics.
            </p>
          </div>
        </div>
      </div>

          {/*Our Cranes*/}
      <div className="allhead pt-2">
        <h1 className="text-center fw-bold">Our Cranes</h1>

        <div className="container mt-4 mb-4">
          <div className="row g-5">
            {ourCrane.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="card shadow bg-white rounded h-100 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt={item.name}
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </>
  );
}
