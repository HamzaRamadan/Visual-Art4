import SectionTitle from "../components/layout/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { aboutTranslations } from "../utils/aboutTranslations";
import "../components/sections/AboutUs.css";

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
    <div className="page about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-text"></div>
      </div>

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
    .about-hero {
      position: relative;
      width: 100%;
      height: 70vh;
      margin-top: -100px;
      background-image: url('/assets/images/aboutUs.jpeg');
      background-size: cover;      
      background-repeat: no-repeat; 
      background-position: center;
      background-attachment: fixed; /* ✅ شغال للديسكتوب */
    }

    .about-hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      text-align: center;
    }

    .about-content {
      position: relative;
      z-index: 1;
      background: #fff;
      padding-top: 2rem;
    }

    /* 📱 للموبايل فقط */
    @media screen and (max-width: 767px) {
      .about-hero {
        height: 50vh; 
        margin-top: -120px;
        background-attachment: scroll !important; /* ✅ غصب عنه يغير */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  `}
      </style>
    </div>
  );
};

export default AboutDetailes;
