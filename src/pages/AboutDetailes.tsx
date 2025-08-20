import SectionTitle from '../components/layout/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../utils/aboutTranslations';
import '../components/sections/AboutUs.css';

const AboutDetailes = () => {
  const { language } = useLanguage();
  const t = (key: string): string => {
    return aboutTranslations[language as keyof typeof aboutTranslations][key as keyof typeof aboutTranslations.en] || key;
  };

  return (
    <div className="page about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-image"></div>
        
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="container">
          <SectionTitle title={t('aboutTitle')} />
          <div className="about-text">
            <p>{t('aboutContent')}</p>
          </div>
          <div className="about-vision-mission">
            <div className="vision-mission-card">
              <h3>{t('ourVision')}</h3>
              <p>{t('vision')}</p>
            </div>
            <div className="vision-mission-card">
              <h3>{t('ourMission')}</h3>
              <p>{t('mission')}</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-hero {
            position: relative;
            width: 100%;
            height: 50vh;
            overflow: hidden;
          }

          .about-hero-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 50vh;
            background-image: url('/assets/images/aboutUs.jpeg');
            background-size: cover;
            background-position: center;
            z-index: -1;
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

          @media (max-width: 768px) {
            .about-hero {
              height: 60vh;
            }
            .about-hero-text h1 {
              font-size: 1.8rem;
            }
            .about-text p {
              font-size: 0.95rem;
            }
            .vision-mission-card {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
