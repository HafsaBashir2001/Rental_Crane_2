import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center allhead">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow border-0">
              <h1 className="text-center heading pt-4">Contact Us</h1>

              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email :
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                      Contact Number :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      
                      placeholder="Enter Contact Number"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message :
                    </label>
                    <textarea
                      className="form-control"
                      
                      rows="4"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
