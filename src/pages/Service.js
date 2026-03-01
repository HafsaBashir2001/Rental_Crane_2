import React from "react";

export default function Service() {
  const serviceData = [
    { image: "/images/logo1.jpg", service: "Crane Rental" },
    { image: "/images/logo2.jpg", service: "Heavy Machinery Transport" },
    { image: "/images/logo3.jpg", service: "On-site Lifting Solutions" },
    { image: "/images/logo4.jpg", service: "Industrial & Construction Support" },
    { image: "/images/logo5.jpg", service: "Maintenance & Technical Support" },
  ];

  const ourCrane = [
    { 
      image: "/images/crane6.png", 
      name: "Truck Crane",
      desc: "Max. Lifiting Capacity: 16-45T\nMax. Boom Length: 32 - 45 m\nMax. Lifting Height: 40.5 - 60.5 m",
      feature: "Compact Design\nDouble Pump Intelligent Flow Distribution\nHigh Performance Chassis\nSmart Control System\nPrecision & Economy"
    },
    { 
      image: "/images/crane7.png", 
      name: "All Terrain Crane",
      desc: "Max. Lifiting Capacity: 50-1200T\nMax. Boom Length: 40 - 100 m\nMax. Lifting Height: 50 - 150 m",
      feature: "Excellent Mobility\nHigh Stability on Rough Terrain\nAdvanced Hydraulic Systems\nSmart Load Monitoring\nDurable Multi-Axle Design"
    },
    { 
      image: "/images/crane8.png", 
      name: "Rough Terrain Crane",
      desc: "Max. Lifiting Capacity: 30-120T\nMax. Boom Length: 30 - 60 m\nMax. Lifting Height: 35 - 75 m",
      feature: "Single Cabin Operation\nLarge Tyres for Stability\nHigh Maneuverability\nFour-Wheel Drive & Steering\nHeavy Duty Suspension"
    },
    { 
      image: "/images/crane9.png", 
      name: "Truck Mounted Crane",
      desc: "Max. Lifiting Capacity: 20-80T\nMax. Boom Length: 25 - 50 m\nMax. Lifting Height: 30 - 65 m",
      feature: "Easy Road Transport\nQuick Setup\nFuel Efficient Engine\nHydraulic Telescopic Boom\nHigh Flexibility for Urban Areas"
    },
    { 
      image: "/images/crane10.png", 
      name: "Crawler Crane",
      desc: "Max. Lifiting Capacity: 50-3000T\nMax. Boom Length: 40 - 120 m\nMax. Lifting Height: 50 - 200 m",
      feature: "High Stability with Tracks\nHeavy Lifting Power\nModular Boom Systems\nExcellent for Soft Ground\nExtended Reach with Jib"
    },
    { 
      image: "/images/crane11.png", 
      name: "Tower Crane",
      desc: "Max. Lifiting Capacity: 10-80T\nMax. Boom Length: 30 - 70 m\nMax. Lifting Height: 100 - 300 m",
      feature: "Ideal for High-Rise Construction\nWide Working Radius\nRemote Control Options\nEnergy Efficient Motors\nStrong Wind Resistance"
    },
    { 
      image: "/images/crane12.png", 
      name: "Loader Crane",
      desc: "Max. Lifiting Capacity: 1-30T\nMax. Boom Length: 10 - 25 m\nMax. Lifting Height: 12 - 35 m",
      feature: "Compact Vehicle Mounted Design\nQuick Loading & Unloading\nHydraulic Arm Precision\nEasy to Operate\nCost Effective for Small Loads"
    }
  ];

  return (
    <>
      {/* Services Section */}
      <div className="allhead pt-4">
        <h1 className="text-center fw-bold">Our Services</h1>

        <div className="container mt-4 mb-4">
          <div className="row g-4">
            {serviceData.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="card shadow bg-white rounded h-100 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt={item.service}
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.service}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crane Types Section */}
      <div className="allhead">
        <h1 className="heading text-center mt-5 fw-bold">Crane Types</h1>

        <div className="container mt-4 mb-4">
          <div className="row g-5">
            {ourCrane.map((item, index) => (
              <div key={index} className="col-12">
                <div className="card shadow bg-white rounded h-100 d-flex flex-column flex-md-row">
                  
                  {/* Crane Image */}
                  <img
                    className="p-2 mx-auto mx-md-0"
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", maxWidth: "280px", height: "auto", objectFit: "contain" }}
                  />

                  {/* Crane Details & Features */}
                  <div className="d-flex flex-column flex-lg-row w-100">
                    
                    {/* Crane Details */}
                    <div className="card-body border">
                      <h5 className="card-title fw-bold fs-4">{item.name}</h5>
                      {item.desc ? (
                        item.desc.split("\n").map((line, i) => (
                          <p key={i} className="mb-1 fs-6">{line}</p>
                        ))
                      ) : (
                        <p className="text-muted">No details available</p>
                      )}
                    </div>

                    {/* Crane Features */}
                    <div className="card-body border">
                      <h5 className="card-title fw-bold fs-5">Features</h5>
                      {item.feature ? (
                        item.feature.split("\n").map((line, i) => (
                          <p key={i} className="mb-1 fs-6">{line}</p>
                        ))
                      ) : (
                        <p className="text-muted">No details available</p>
                      )}
                    </div>

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
