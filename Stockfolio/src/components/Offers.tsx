import React from "react";

import '../index.css';

const Offers: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
      <div className="service-cards">
      <div className="card">
        <h3>Service 1</h3>
        <p>Detailed analysis of stock trends and forecasts.</p>
      </div>
      <div className="card">
        <h3>Service 2</h3>
        <p>Real-time market data and alerts.</p>
      </div>
      <div className="card">
        <h3>Service 3</h3>
        <p>Portfolio management and optimization strategies.</p>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Offers;