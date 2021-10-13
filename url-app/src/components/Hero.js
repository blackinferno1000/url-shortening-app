import React from "react";
import Illustration from "../images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="hero">
      <img className="illustration" src={Illustration} alt="hero" />
      <div className="hero-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <span className="hero-button">Get Started</span>
      </div>
    </div>
  );
}
