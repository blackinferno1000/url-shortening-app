import React from "react";
import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let [isMobile, setIsMobile] = useState(null)
  const navRef = useRef(null)

  function checkIfMobile() {
    if(window.innerWidth <= 650) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkIfMobile);
    checkIfMobile()
    return () => window.removeEventListener('resize', checkIfMobile);
  },[])

  return (
    <nav>
      <span className="logo">Shortly</span>
       { isMobile && <div className="hamburger" onClick={() => {
        console.log(navRef.current.classList.toggle('showNav'))
      }}>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>} 
      <div className={isMobile ? 'mobileNav' : 'nav'} ref={navRef}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <ul>
        <li>Login</li>
        <li className="signup">Sign Up</li>
      </ul>
    </div>
    </nav>
  );
}
