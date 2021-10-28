import React from "react";

export default function Stats() {
  return (
    <div className="stats">
      <div className="stat-title">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="stat-cards">
        <Card
          title="Brand Recognition"
          detail="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        />
        <Card
          title="Detailed Records"
          detail="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          title="Fully Customizable"
          detail="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="stat-card">
      <img alt="icon" />
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
    </div>
  );
}
