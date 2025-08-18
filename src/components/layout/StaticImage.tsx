import React, { useEffect, useState } from "react";

const StaticImage: React.FC = () => {
  const images = [
    "/assets/images/path.png",
    "/assets/images/KBA.jpg",
    "/assets/images/p1.png",
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
          className={`parallax-image ${
            index === currentIndex ? "active" : ""
          }`}
        />
      ))}
    </section>
  );
};

export default StaticImage;

// 🎨 Styles
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .parallax-slider {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .parallax-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transform: translateX(30px) scale(1.05); /* تبدأ مزاحة ومكبرة شوية */
    transition: opacity 1.2s ease-in-out, transform 5s ease-in-out;
    z-index: 0;
  }

  .parallax-image.active {
    opacity: 1;
    transform: translateX(0) scale(1); /* تدخل وتستقر */
    z-index: 1;
  }

  /* 📱 موبايل */
  @media (max-width: 768px) {
    .parallax-slider {
      height: 350px;
    }
    .parallax-image {
      object-fit: contain;
    }
  }
`;
document.head.appendChild(styleSheet);
