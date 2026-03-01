import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Company Info */}
          <div className="col-12 col-md-4 mb-4">
            <h4 className="fw-bold">Rental Crane Services</h4>
            <p>
              Rental Crane Service provides reliable crane rental, heavy machinery transport, 
              and lifting solutions for construction and industrial needs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">📍 UAE </p>
            <p className="mb-1">📞 0000000000</p>
            <p className="mb-1">📧 contact gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top border-light pt-3 mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Rental Crane services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
