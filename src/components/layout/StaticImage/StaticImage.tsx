import React, { useEffect, useState } from "react";
import "./StaticImage.css"; 

const StaticImage: React.FC = () => {
  const images = [
    "/assets/images/medical.png",
    "/assets/images/WhatsApp Image 2025-08-31 at 9.35.49 AM.jpeg",
    // "/assets/images/medical.png",
    // "/assets/images/medical.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏱️ تغيير الصورة كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="parallax-slider">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`parallax-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </section>
  );
};

export default StaticImage;
