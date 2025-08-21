import React, { useState, useEffect, useRef } from "react";
import { useLanguageHook } from "../hooks/useLanguage";
import SectionTitle from "../components/layout/SectionTitle";

const Contact: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const sectionTopRef = useRef<number>(0);

  // محاكاة الخلفية الثابتة
  useEffect(() => {
    const computeTop = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      sectionTopRef.current = rect.top + window.scrollY;
      updateBg();
    };

    const updateBg = () => {
  if (!bgRef.current || !sectionRef.current) return;

  const rect = sectionRef.current.getBoundingClientRect();
  const y = Math.max(0, -rect.top); // ما نخليش الخلفية تتحرك برا السكشن
  bgRef.current.style.backgroundPosition = `center ${y}px`;
};

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateBg();
        rafRef.current = null;
      });
    };

    const onResize = () => {
      setWindowWidth(window.innerWidth);
      computeTop();
    };

    computeTop();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={sectionRef as any}
      className={`contact-section ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* الخلفية */}
      <div ref={bgRef} className="contact-bg" aria-hidden="true" />

      <div className="contact-wrapper">
        <SectionTitle title={isRTL ? "تواصل معنا" : "Contact Us"} />

        <div
          className={`contact-container ${
            windowWidth < 768 ? "column" : isRTL ? "row-reverse" : "row"
          }`}
        >
          <div className="contact-card">
            <div className="contact-heading">
              <img
                src="/assets/images/headset.svg"
                alt="Contact"
                className="contact-icon"
              />
              {isRTL ? "تواصل معنا" : "Contact Us"}
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <img
                  src="/assets/images/location.svg"
                  alt="Location"
                  className="contact-icon"
                />
                {isRTL ? "العنوان" : "Address"}
              </div>
              <div className="contact-text">
                {isRTL
                  ? "العراق، بغداد، الكرادة الخارجية"
                  : "Iraq, Baghdad, Outer Karrada"}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <img
                  src="/assets/images/phone.svg"
                  alt="Phone"
                  className="contact-icon"
                />
                {isRTL ? "الهاتف" : "Phone"}
              </div>
              <div className="contact-text">
                <span className="phone-number">+964 782 450 0000</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <img
                  src="/assets/images/email.svg"
                  alt="Email"
                  className="contact-icon"
                />
                {isRTL ? "البريد الإلكتروني" : "Email"}
              </div>
              <div className="contact-text">info@fabyab.co</div>
            </div>
          </div>

          <div className="contact-card map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3335.0317643573844!2d44.44382857568429!3d33.29183197345271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1i1!2zMzPCsDE3JzMwLjYiTiA0NMKwMjYnNDcuMSJF!5e0!3m2!1sen!2sjo!4v1751873356231!5m2!1sen!2sjo"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            />
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding: 4rem 1rem;
          overflow: hidden; /* يمنع المحتوى من الخروج */
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-section.rtl { direction: rtl; }
        .contact-section.ltr { direction: ltr; }

        .contact-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image:
            linear-gradient(rgba(37,32,32,0.6), rgba(255,255,255,0.6)),
            url("/assets/images/lemon.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center 0px;
          will-change: background-position;
          transform: translateZ(0);
        }

        .contact-wrapper {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-container {
          width: 100%;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap; /* يخلي البوكسات تتحرك للأسطر بدل ما تخرج برا */
        }

        .contact-container.column { flex-direction: column; }
        .contact-container.row { flex-direction: row; }
        .contact-container.row-reverse { flex-direction: row-reverse; }

        .contact-card {
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 2rem;
          flex: 1 1 400px;
          min-width: 300px;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .contact-heading {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4b0082;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-item { margin-bottom: 1rem; }

        .contact-label {
          font-weight: bold;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-text { color: #333; font-size: 1rem; }

        .contact-icon { width: 20px; height: 20px; }

        .phone-number {
          direction: ltr;
          unicode-bidi: plaintext;
          font-family: Arial, sans-serif;
        }

        .map-card { padding: 0; }

        .map-card iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 16px;
          min-height: 350px;
        }

        @media (max-width: 768px) {
          .contact-section { padding: 3rem 1rem; }
          .contact-wrapper { width: 95%; }
          .map-card iframe { min-height: 300px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-bg { background-position: center center; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
