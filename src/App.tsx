import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";

import ProductsPage from "./pages/ProductsPage";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetail";
import AboutUs from "./components/sections/AboutUs";
import AboutDetailes from "./pages/AboutDetailes";
import ServicesSection from "./components/sections/ServicesSection";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceDetails from "./components/sections/ServiceDetails";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import News from "./pages/News/News";
// import AdminPanel from "./admin/AdminPanel";

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
              <Route path="/servicess" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              {/* <Route path="/AdminPanel" element={<AdminPanel />} /> */}
              <Route
                path="/products/:category"
                element={<ProductDetailPage />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
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
