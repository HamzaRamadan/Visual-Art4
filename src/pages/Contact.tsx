import React, { useState, useEffect } from "react";
import { useLanguageHook } from "../hooks/useLanguage";
import SectionTitle from "../components/layout/SectionTitle";

const Contact: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      position: "relative",
      padding: "4rem 1rem",
      direction: isRTL ? "rtl" : "ltr",
      backgroundImage: `linear-gradient(rgba(37, 32, 32, 0.7), rgba(255,255,255,0.7)), url("/assets/images/lemon.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed", // <==== هنا التعديل المهم
      zIndex: 1,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: windowWidth < 768 ? "column" : isRTL ? "row-reverse" : "row",
      gap: "2rem",
    },
    card: {
      background: "rgba(255, 255, 255, 0.35)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
      padding: "2rem",
      flex: "1 1 400px",
      minWidth: "300px",
      minHeight: "350px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#4b0082",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },
    item: {
      marginBottom: "1rem",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "0.25rem",
    },
    text: {
      color: "#333",
      fontSize: "1rem",
    },
    icon: {
      width: "20px",
      height: "20px",
      verticalAlign: "middle",
      marginInlineEnd: "0.5rem",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      display: "block",
      borderRadius: "16px",
    },
  };

  return (
    <section style={styles.section}>
      <SectionTitle title={language === 'ar' ? "تواصل معنا" : "Contact Us"} />
      <div style={styles.container}>
        {/* 🧾 Contact Info Card */}

        <div style={styles.card}>
          <div style={styles.heading}>
            <img
              src="/assets/images/headset.svg"
              alt="Contact"
              style={styles.icon}
            />
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </div>

          <div style={styles.item}>
            <div style={styles.label}>
              <img src="/assets/images/location.svg" alt="Location" style={styles.icon} />
              {isRTL ? "العنوان" : "Address"}
            </div>
            <div style={styles.text}>
              {isRTL
                ? "العراق، بغداد، الكرادة الخارجية"
                : "Iraq, Baghdad, Outer Karrada"}
            </div>
          </div>

          <div style={styles.item}>
            <div style={styles.label}>
              <img src="/assets/images/phone.svg" alt="Phone" style={styles.icon} />
              {isRTL ? "الهاتف" : "Phone"}
            </div>
            <div style={styles.text}>
   <span
  style={{
    direction: 'ltr',          // اتجاه النص من اليسار لليمين
    unicodeBidi: 'plaintext',  // منع تحويل الأرقام
    fontFamily: 'Arial, sans-serif' // أي خط يدعم الأرقام الغربية
  }}
>
  {isRTL ? "+964 782 450 0000" : "+964 782 450 0000"}
</span>            </div>
          </div>

          <div style={styles.item}>
            <div style={styles.label}>
              <img src="/assets/images/email.svg" alt="Email" style={styles.icon} />
              {isRTL ? "البريد الإلكتروني" : "Email"}
            </div>
            <div style={styles.text}>info@fabyab.co</div>
          </div>
        </div>

        {/* 🗺️ Map Card */}
        <div style={{ ...styles.card, padding: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3335.0317643573844!2d44.44382857568429!3d33.29183197345271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE3JzMwLjYiTiA0NMKwMjYnNDcuMSJF!5e0!3m2!1sen!2sjo!4v1751873356231!5m2!1sen!2sjo"
            allowFullScreen
            loading="lazy"
            title="Google Map"
            style={styles.iframe}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
