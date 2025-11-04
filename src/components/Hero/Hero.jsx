import React, { useRef, useState } from "react";
import "./Hero.css";
import ContactModal from "../ContactModal/ContactModal";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left side image */}
        <div className="hero-image">
          <img src="/assets/farmer.png" alt="Farmer working in agricultural field with modern technology" className="main-img" />
        </div>

        {/* Right side text */}
        <div className="hero-text">
          <h1 className="hero-title">Agritech</h1>
          <p className="hero-desc">
            Empowering farmers with innovative technology. We help you optimize yields,
            reduce costs, and build sustainable agricultural practices for a greener future.
          </p>
          <a href="mailto:contact@agritech.com" className="btn-primary">Get Started</a>
        </div>
      </div>
      {/* Contact trigger */}
      <button
        className="contact-trigger"
        onClick={handleOpenModal}
        ref={triggerRef}
        aria-label="Open contact form"
      >
        Contact
      </button>
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        triggerRef={triggerRef}
      />
    </section>
  );
}

export default Hero;
