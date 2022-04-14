import React, { useState, useEffect, useRef } from "react";

const featuredProducts = [
  "https://i.ibb.co/yhw3gtQ/1080.png",
  "https://i.ibb.co/yhw3gtQ/1080.png",
  "https://i.ibb.co/yhw3gtQ/1080.png",
];

let count = 0;
let slideInterval;
export default function A2HS() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="relative w-full select-none">
      <div className="mx-auto">
        <img
          src={featuredProducts[currentIndex]}
          alt=""
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
