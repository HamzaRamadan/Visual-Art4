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
    <div className="page about-page">
      {/* Hero Section مع تأثير البارالكس المحسّن */}
      <Parallax
        bgImage="/assets/images/aboutUs.jpeg"
        strength={600} // زدت قوة التأثير
        bgImageStyle={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          minHeight: "100%", // ضمان عدم القص
        }}
        contentClassName="parallax-content"
      >
        <div className="about-hero">{/* تم حذف طبقة التدرج فوق الصورة */}</div>
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
          /* الإعدادات الأساسية للهيرو */
          .about-hero {
            position: relative;
            width: 100%;
            height: 75vh; /* زدت الارتفاع للشاشات الكبيرة */
            margin-top: -100px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          
          /* محتوى البارالكس */
          .parallax-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* محتوى الصفحة */
        .about-content {
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 0 0 4rem 0; 
  /* box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1); */ /* شيلنا الشادو */
  margin-top: -40px;
  
}

          
          /* بطاقات الرؤية والرسالة */
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
          
          /* 📱 للموبايل فقط */
          @media screen and (max-width: 767px) {
            .about-hero {
              height: 60vh; /* زدت الارتفاع للموبايل */
              margin-top: -120px;
              margin-bottom: -20px; /* ← شيلت المسافة تحت الصورة */
            }
            
            .vision-mission-card {
              margin-bottom: 2rem;
              padding: 2rem;
            }
            
            .vision-mission-card h3 {
              font-size: 1.5rem;
            }
          }
          
          /* 🖥️ للشاشات الكبيرة جدًا */
          @media screen and (min-width: 1200px) {
            .about-hero {
              height: 80vh; /* ارتفاع أكبر للشاشات الكبيرة جدًا */
            }
          }
          
          /* حركة خفيفة للنص */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
