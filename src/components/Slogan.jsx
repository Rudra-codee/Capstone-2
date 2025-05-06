import React, { useEffect } from "react";
import { gsap } from "gsap";

const Slogan = () => {
  const sloganText = "Because Every Second Counts.";

  useEffect(() => {
    gsap.fromTo(
      ".letter",
      { opacity: 0, scale: 0.8 }, 
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1, 
        duration: 0.6,
        ease: "ease.out",
      }
    );
  }, []);

  return (
    <div className="slogan-wrapper">
      <h1 className="slogan">
        {sloganText.split("").map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Slogan;
