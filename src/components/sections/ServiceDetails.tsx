import { useParams } from "react-router-dom";
import { servicesData } from "../../utils/data";
import { useLanguageHook } from "../../hooks/useLanguage";
import { useState, useEffect } from "react";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguageHook();
  const service = servicesData[language].find((s) => s.id.toString() === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? service.images.length - 1 : currentIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === service.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  // 🔹 هنا: تغيير الصورة تلقائيًا كل 3 ثواني
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // تنظيف الـ interval عند تفكيك المكون
  }, [service.images.length]);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{service.title}</h1>

      {/* Slider الصور */}
      <div style={sliderContainerStyle}>
        <button style={leftArrowStyle} onClick={prevImage}>
          &#10094;
        </button>
        <img
          src={service.images[currentIndex]}
          alt={`${service.title} ${currentIndex + 1}`}
          style={sliderImageStyle}
        />
        <button style={rightArrowStyle} onClick={nextImage}>
          &#10095;
        </button>
      </div>

      <p style={descriptionStyle}>{service.description}</p>
      <p style={detailsStyle}>{service.details}</p>
    </div>
  );
};

export default ServiceDetails;


// ====== Styles ======
const containerStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: 1.6,
  color: "#333",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  marginBottom: "20px",
  color: "#0a4d8c",
};

const sliderContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};

const sliderImageStyle: React.CSSProperties = {
  width: "100%",
  maxHeight: "400px",
  objectFit: "contain", // 🔹 أهم تغيير هنا
  borderRadius: "8px",
  transition: "transform 0.3s ease",
};

// استايل عام للأسهم
const arrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease",
};

// سهم الشمال
const leftArrowStyle: React.CSSProperties = {
  ...arrowStyle,
  left: "10px",
};

// سهم اليمين
const rightArrowStyle: React.CSSProperties = {
  ...arrowStyle,
  right: "10px",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight:"bold",
  marginBottom: "15px",
  color: "#333",
};

const detailsStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  whiteSpace: "pre-line",
};

