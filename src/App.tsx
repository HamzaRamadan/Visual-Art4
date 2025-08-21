import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";

import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetail";
import AboutUs from "./components/sections/AboutUs/AboutUs";
import AboutDetailes from "./pages/AboutDetailes";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import ServiceDetails from "./components/sections/ServiceDetails/ServiceDetails";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import News from "./pages/News/News";
import CompanyProfile from "./pages/CompanyProfile";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route
                path="/products/:category"
                element={<ProductDetailPage />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/CompanyProfile" element={<CompanyProfile />} />
              <Route path="/AboutDetailes" element={<AboutDetailes />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
