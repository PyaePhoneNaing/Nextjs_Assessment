"use client";

import React from "react";
import "./banner.styles.scss";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    const background = scene.querySelector(".background");
    const mountain = scene.querySelector(".mountain");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth) * 30 - 15; // Adjust the multiplier for desired effect
      const moveY = (clientY / innerHeight) * 30 - 15; // Adjust the multiplier for desired effect

      background.style.transform = `translate(${moveX}px, ${moveY}px)`;
      mountain.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`; // Adjust the multiplier for desired effect
    };

    scene.addEventListener("mousemove", handleMouseMove);

    return () => {
      scene.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img id="santa" src="./assets/santa.png" />

          <div id="scene">
            <div class="background">
              <img src="./assets/background.webp" />
            </div>

            <div className="text-overlay">
              <p className="text-button">Celebrate With Us</p>
              <h1>
                <span>Merry</span> Christmas
              </h1>
              <p>
                Let the <span>sparkle</span> of the
                <br /> holidays light up your days.
              </p>
              <a> - Check Our Promotion</a>
            </div>

            <div class="mountain">
              <img src="./assets/mountain.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
