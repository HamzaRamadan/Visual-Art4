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
      {/* الصورة كـ Background */}
      <div className="about-image"></div>

      <div className="about-content">
        <div className="container">
          <SectionTitle title={t('aboutTitle')} />

          <div className="about-content">
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
      </div>

      <style>
        {`
          .about-image {
            width: 100%;
            height: 60vh;
            background-image: url('/assets/images/aboutUs.jpeg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            z-index: 0;
          }

          .about-content {
            position: relative;
            z-index: 1;
            background: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
