import React from "react";
import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="info">
      <h2>Why Digital Marketing Matters for Agritech Companies</h2>

      <div className="info-content">
        <div className="info-text">
          <ul className="info-list">
            <li>
              <span className="bullet-icon">🌱</span>
              Most people start their search online — they read reviews,
              compare products, and watch videos before buying.
            </li>
            <li>
              <span className="bullet-icon">📈</span>
              We help your agritech brand show up right where it counts — in
              front of customers who are ready to buy.
            </li>
            <li>
              <span className="bullet-icon">💰</span>
              From discovery to purchase, our digital marketing brings you
              more views, more clicks, and more sales.
            </li>
          </ul>
        </div>
        <img src="/assets/illustration.png" alt="Agritech illustration" className="info-img" />
      </div>
    </section>
  );
}

export default InfoSection;
