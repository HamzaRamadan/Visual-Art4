import { useParams } from "react-router-dom";
import { servicesData } from "../../utils/data";
import { useLanguageHook } from "../../hooks/useLanguage";
import { useState } from "react";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguageHook();
  const service = servicesData[language].find((s) => s.id.toString() === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{service.title}</h1>

      {/* الصورة الرئيسية */}
      <div style={mainImageContainer}>
        <img
          src={service.images[currentIndex]}
          alt={service.title}
          style={mainImageStyle}
        />
      </div>

      {/* الصور الصغيرة (Thumbnails) */}
      <div style={thumbnailsContainer}>
        {service.images.slice(0, 3).map((img, index) => (
          <div
            key={index}
            style={{
              ...thumbnailBox,
              border:
                index === currentIndex ? "3px solid #0a4d8c" : "2px solid #ccc",
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} style={thumbnailImg} />
          </div>
        ))}
      </div>

      {/* النصوص */}
      <p style={descriptionStyle}>{service.description}</p>
      <p style={detailsStyle}>{service.details}</p>
    </div>
  );
};

export default ServiceDetails;

//
// ====== Styles ======
//
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

const mainImageContainer: React.CSSProperties = {
  marginBottom: "20px",
  
};

const mainImageStyle: React.CSSProperties = {
  width: "100%",
  maxHeight: "350px",
  objectFit: "contain",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};


const thumbnailsContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "25px",
};

const thumbnailBox: React.CSSProperties = {
  width: "120px",
  height: "90px",
  overflow: "hidden",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "transform 0.3s ease, border 0.3s ease",
};

const thumbnailImg: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#333",
};

const detailsStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  whiteSpace: "pre-line",
};
