import SectionTitle from "../components/layout/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { aboutTranslations } from "../utils/aboutTranslations";
import "../components/sections/AboutUs/AboutUs.css";
import { Parallax } from "react-parallax";

const AboutDetailes = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return (
      aboutTranslations[language as keyof typeof aboutTranslations][
        key as keyof typeof aboutTranslations.en
      ] || key
    );
  };

  return (
    <div className="page about-page ">
      <Parallax
        bgImage="/assets/images/WhatsApp Image 2025-08-31 at 9.35.49 AM (1).jpeg"
        strength={600}
        bgImageStyle={{ objectFit: "cover" }}
        contentClassName="parallax-content"
        bgClassName="custom-parallax-bg"
        className="parallax-wrapper"
      >
        <div className="about-hero"></div>
      </Parallax>

      {/* Content Section */}
      <div className="about-content">
        <div className="container">
          <SectionTitle title={t("aboutTitle")} />
          <div className="about-text">
            <p>{t("aboutContent")}</p>
          </div>
          <div className="about-vision-mission">
            <div className="vision-mission-card">
              <h3>{t("ourVision")}</h3>
              <p>{t("vision")}</p>
            </div>
            <div className="vision-mission-card">
              <h3>{t("ourMission")}</h3>
              <p>{t("mission")}</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .custom-parallax-bg {
          object-fit: contain !important;  
          object-position: center bottom !important; 
          background-color: #000;
        }

        .parallax-wrapper {
          height: 75vh; /* ديسكتوب */
        }

        .about-hero {
          position: relative;
          width: 100%;
          height: 75vh;
          margin-top: -100px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .parallax-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .about-content {
          position: relative;
          z-index: 1;
          background: #fff;
          padding: 0 0 4rem 0; 
          margin-top: -40px;
        }

        .vision-mission-card {
          background: #f8f9fa;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .vision-mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .vision-mission-card h3 {
          color: #2c3e50;
          margin-bottom: 1.2rem;
          font-size: 1.8rem;
        }

        .vision-mission-card p {
          color: #555;
          line-height: 1.7;
        }

        @media screen and (max-width: 767px) {
          .parallax-wrapper {
            height: 55vh !important;  /* ⬅️ تصغير الارتفاع للموبايل */
          }

          .about-hero {
            height: 45vh !important;
            margin-top: -60px;
            margin-bottom: -10px;
          }

          .vision-mission-card {
            margin-bottom: 2rem;
            padding: 2rem;
          }

          .vision-mission-card h3 {
            font-size: 1.5rem;
          }
        }

        @media screen and (min-width: 1200px) {
          .about-hero {
            height: 80vh;
          }
        }
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
