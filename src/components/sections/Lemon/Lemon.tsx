import React from "react";
import lemonImg from "/assets/images/lemon.png";
import "./Lemon.css";
import { useLanguageHook } from "../../../hooks/useLanguage";

const Lemon: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';

  return (
    <div className={`news-page ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="lemon-container">
        {/* العنوان داخل السكشن */}

        <img src={lemonImg} alt="Lemon" className="lemon-image" />
      </section>
    </div>
  );
};

export default Lemon;
