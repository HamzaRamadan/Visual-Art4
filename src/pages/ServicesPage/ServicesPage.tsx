// pages/ServicesPage.tsx
import React from "react";
import { useLanguageHook } from "../../hooks/useLanguage";
import { servicesData } from "../../utils/data";
import SectionTitle from "../../components/layout/SectionTitle";
import './servicesPage.css';

const ServicesPage: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";

  const services = servicesData[language];

  return (
    <div className="srv-page" dir={isRTL ? "rtl" : "ltr"}>
      <div className="srv-container">
        <SectionTitle title={language === "ar" ? "خدماتنا" : "Our Services"} />

        <div className="srv-intro">
          <p>
            {language === "ar"
              ? "نقدم في مصنع الفارابي للطباعة مجموعة متكاملة من الخدمات التي تلبي احتياجات عملائنا في مختلف القطاعات."
              : "At Al-Farabi Printing Factory, we offer an integrated set of services that meet the needs of our customers in various sectors."}
          </p>
        </div>

        <div className="srv-grid">
          {services.map((service, index) => (
            <div className="srv-card" key={index}>
              <div className="srv-icon">
                <div className="srv-icon-bg">
                  <i
                    className={`fas ${
                      index === 0
                        ? "fa-users-cog"
                        : index === 1
                        ? "fa-palette"
                        : index === 2
                        ? "fa-check-circle"
                        : index === 3
                        ? "fa-warehouse"
                        : "fa-industry"
                    }`}
                  ></i>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="srv-features">
                <h4>{language === "ar" ? "ماذا نقدم" : "What We Offer"}</h4>
                <ul>
                  {index === 0 && (
                    <>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تنظيم سير العمل"
                          : "Workflow Organization"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تبسيط العمليات"
                          : "Process Simplification"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "توفير الوقت والتكاليف"
                          : "Time and Cost Savings"}
                      </li>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تصاميم جاهزة للطباعة"
                          : "Print-Ready Designs"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "مراعاة المواد والحبر"
                          : "Material and Ink Consideration"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تسريع وقت الوصول للسوق"
                          : "Faster Time to Market"}
                      </li>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "فحص جودة متقدم"
                          : "Advanced Quality Inspection"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تقليل الأخطاء البشرية"
                          : "Reducing Human Error"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "ضبط الدقة العالية"
                          : "High Precision Tuning"}
                      </li>
                    </>
                  )}

                  {index === 3 && (
                    <>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "مرافق تخزين آمنة"
                          : "Secure Storage Facilities"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "إدارة المخزون"
                          : "Inventory Management"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "حماية المنتجات"
                          : "Product Protection"}
                      </li>
                    </>
                  )}

                  {index === 4 && (
                    <>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "طاقة إنتاجية عالية"
                          : "High Production Capacity"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تلبية الطلبات الكبيرة"
                          : "Meeting Large Orders"}
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{" "}
                        {language === "ar"
                          ? "تسليم في الوقت المحدد"
                          : "On-Time Delivery"}
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
