import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <span>Shortly</span>
      <div>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
}
