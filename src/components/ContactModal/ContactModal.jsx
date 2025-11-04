import React, { useEffect, useRef, useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, triggerRef }) => {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: []
  });

  const services = [
    'Crop Monitoring',
    'Soil Analysis',
    'Irrigation Management',
    'Pest Control',
    'Harvest Planning',
    'Market Insights'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      firstFocusableRef.current.focus();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, triggerRef]);

  if (!isOpen) return null;

  return (
    <>
      <div className={`modal-backdrop ${isOpen ? 'modal-open' : ''}`} onClick={onClose}></div>
      <div className={`modal-container ${isOpen ? 'modal-open' : ''}`} ref={modalRef}>
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={onClose}
            ref={lastFocusableRef}
            aria-label="Close modal"
          >
            ×
          </button>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-fields">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                ref={firstFocusableRef}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <h2 className="services-heading">Services We Offer</h2>
            <div className="services-grid">
              {services.map(service => (
                <label key={service} className="service-item">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactModal;