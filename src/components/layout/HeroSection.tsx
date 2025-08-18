import React from "react";
import { useLanguageHook } from "../../hooks/useLanguage";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HeroSection: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";
  const heroRef = useScrollAnimation();

  return (
    <section className="hero" ref={heroRef} dir={isRTL ? "rtl" : "ltr"}>
      <div className="hero-background">
        <video autoPlay muted loop playsInline>
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <style>
        {`
          :root {
            --hero-height-desktop: 90vh;
            --hero-height-tablet: 70vh;
            --hero-height-mobile: 30vh; 
          }

          .hero {
            position: relative;
            width: 100%;
            height: var(--hero-height-desktop);
            overflow: hidden;
          }

          .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            // background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-background video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          /* Tablet */
          @media (max-width: 1024px) {
            .hero {
              height: var(--hero-height-tablet);
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .hero {
              height: var(--hero-height-mobile);
            }
            .hero-background video {
              object-fit: contain;
              // background-color: #000;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
