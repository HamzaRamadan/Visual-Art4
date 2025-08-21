import React, { useEffect, useRef, useState } from "react";

const StaticImage2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = rect.top + scrollPosition;

      const newOffset = scrollPosition - sectionTop;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ميديا كويري محقونة جوا نفس الملف
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .static-image2-container {
        width: 90%;
        height: 60vh; /* أصغر من 80vh */
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 10px;
      }

      @media (max-width: 768px) {
        .static-image2-container {
          height: 35vh; /* أصغر على الموبايل */
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section ref={sectionRef} className="static-image2-container">
      <div
        style={{
          ...styles.imageWrapper,
          transform: `translateY(${offset}px)`,
        }}
      >
        <div style={styles.fixedImage} />
      </div>
    </section>
  );
};

export default StaticImage2;

const styles: { [key: string]: React.CSSProperties } = {
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    willChange: "transform",
  },
  fixedImage: {
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/assets/images/KBA.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    WebkitTransform: "translateZ(0)",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
};
