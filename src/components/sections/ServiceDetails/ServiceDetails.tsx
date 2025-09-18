import { useParams } from "react-router-dom";
import { servicesData } from "../../../utils/data";
import { useLanguageHook } from "../../../hooks/useLanguage";
import { useState } from "react";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguageHook();
  const service = servicesData[language].find((s) => s.id.toString() === id);

  const [currentIndex] = useState(0);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div
      className={`service-details-container ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <h1 className="service-details-title">{service.title}</h1>

      {/* الصورة الرئيسية */}

      <div className="parallax-wrapper h-[60vh] relative">
        <img
          src={service.images[currentIndex]}
          alt="service"
          className="w-full h-full object-content"
        />

        {/* ✅ hero section with overlay */}
        <div className="about-hero absolute inset-0">
          <div className="overlay"></div>
        </div>
      </div>

      <p className="service-description">{service.description}</p>
      <p className="service-details-text">{service.details}</p>
    </div>
  );
};

export default ServiceDetails;
