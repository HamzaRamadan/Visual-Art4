import React from "react";
import { Link } from "react-router-dom";
import { useLanguageHook } from "../../hooks/useLanguage";
import { companyData } from "../../utils/data";
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";
  const contact = companyData[language].contact;

  return (
    <footer
      className="bg-[#7249bc] text-white font-[Cairo] mt-auto"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-5 py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
        {/* Logo + slogan */}
        <div className={isRTL ? "md:text-right" : "md:text-left"}>
          <img
            src="/assets/images/Footer.jpeg"
            alt={companyData[language].name}
            className="h-[100px] max-w-full object-contain mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            {companyData[language].slogan}
          </p>
        </div>

        {/* Quick Links – hidden on small screens */}
        <div className="hidden lg:flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-5 text-center">
            {isRTL ? "روابط سريعة" : "Quick Links"}
          </h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { path: "/", label: isRTL ? "الرئيسية" : "Home" },
              { path: "/about", label: isRTL ? "من نحن" : "About Us" },
              { path: "/services", label: isRTL ? "خدماتنا" : "Services" },
              { path: "/products", label: isRTL ? "منتجاتنا" : "Products" },
              { path: "/contact", label: isRTL ? "اتصل بنا" : "Contact" },
              { path: "/news", label: isRTL ? "الأخبار" : "News" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="footer-link text-white/80 hover:text-[#3498db] text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
        <div className={isRTL ? "md:text-right" : "md:text-left"}>
          <h3 className="text-lg font-semibold text-center md:text-left">
            {isRTL ? "اتصل بنا" : "Contact Us"}
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaMapMarkerAlt />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaPhone />
              <span className="direction-ltr">{contact.phone}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaEnvelope />
              <span>{contact.email}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaGlobe />
              <span>{contact.website}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black/20 py-4">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm opacity-80 text-center md:text-left">
          <p
            className={`w-full md:w-auto ${
              isRTL ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto"
            }`}
          >
            &copy; {new Date().getFullYear()} {companyData[language].name}.{" "}
            {isRTL ? "جميع الحقوق محفوظة." : "All Rights Reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
