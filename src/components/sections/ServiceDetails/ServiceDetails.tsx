import { useParams } from "react-router-dom";
import { servicesData } from "../../../utils/data";
import { useLanguageHook } from "../../../hooks/useLanguage";
import { useState } from "react";
import "./ServiceDetails.css";
import SectionTitle from "../../layout/SectionTitle";

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
      {/* <h1 className="service-details-title">{service.title}</h1> */}
      <div className="m-auto flex justify-center items-center">

        <SectionTitle  title={service.title} />
      </div>

      {/* الصورة الرئيسية */}

      {/* <div className="parallax-wrapper h-[100vh] relative">
        <img
          src={service.images[currentIndex]}
          alt="service"
          className="w-full h-full object-fill"
        /> */}
<div className="parallax-wrapper relative w-full h-[50vh] md:h-[100vh] overflow-hidden">
  <img
    src={service.images[currentIndex]}
    alt="service"
    className="w-full h-full object-cover sm:object-contain md:object-cover"
  />

        {/* ✅ hero section with overlay */}
        <div className="about-hero absolute inset-0">
          <div className="overlay"></div>
        </div>
      </div>


          <div className="about-vision-mission">

      <div className="vision-mission-card1 text-[#7249BD]">
              <h3>{service.description}</h3>
              <p>{service.details}</p>
            </div>
    </div>
    </div>
  );
};

export default ServiceDetails;
