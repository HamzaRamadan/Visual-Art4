import SectionTitle from '../components/layout/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../utils/aboutTranslations';
// import '../components/sections/AboutUs.css';

const AboutDetailes = () => {
  const { language } = useLanguage();
  const t = (key: string): string => {
    return aboutTranslations[language as keyof typeof aboutTranslations][key as keyof typeof aboutTranslations.en] || key;
  };

  return (
    <div className="about-page">
      <div className="about-image-wrapper">
        <img
          src="/assets/images/aboutUs.jpeg"
          alt="About Us"
          className="about-image"
        />
      </div>

      <div className="about-content-overlay">
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
          .about-image-wrapper {
            position: relative;
            width: 100%;
            height: 60vh;
            overflow: hidden;
          }

          .about-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: sticky;
            top: 0;
          }

          .about-content-overlay {
            position: relative;
            z-index: 1;
            margin-top: -60vh; /* عشان المحتوى يبدأ فوق الصورة */
            padding-top: 60vh; /* نفس ارتفاع الصورة */
          }

          .vision-mission-card {
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
          }

          @media (max-width: 768px) {
            .about-image-wrapper {
              height: 40vh;
            }
            .about-content-overlay {
              margin-top: -40vh;
              padding-top: 40vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
