import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguageHook } from "../hooks/useLanguage";
import { productsData } from "../utils/data";
import SectionTitle from "../components/layout/SectionTitle";
import type { Product } from "../types/product";

const ProductDetailPage: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === "ar";
  const { category } = useParams<{ category: string }>();
  const products: Product[] = productsData[language];
  const product = products.find((p) => p.category === category);
  const [currentImage, setCurrentImage] = useState(0);
  
  if (!product) {
    return (
      <div className="container" dir={isRTL ? "rtl" : "ltr"}>
        <SectionTitle
          title={language === "ar" ? "المنتج غير موجود" : "Product Not Found"}
        />
        <p>
          {language === "ar"
            ? "عذراً، المنتج الذي تبحث عنه غير موجود."
            : "Sorry, the product you are looking for does not exist."}
        </p>
      </div>
    );
  }
  
  // تحديد الصور التي سيتم عرضها - استخدام imgList إذا كانت موجودة
  const displayImages: string[] = product.imgList && product.imgList.length > 0 
    ? product.imgList 
    : [product.img || `/assets/images/product-${product.category}.jpg`];

  return (
    <div className="page product-detail-page" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <SectionTitle title={product.title} />
        <div className="product-detail-content">
          <div className="product-detail-image">
            {/* الصورة الرئيسية */}
            <div className="main-image-container">
              <img
                src={displayImages[currentImage]}
                alt={product.title}
                className="main-image"
              />
            </div>
            
            {/* الصور المصغرة - يتم عرضها دائمًا */}
            <div className="image-thumbnails">
              {displayImages.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setCurrentImage(index)}
                  className={`thumbnail ${
                    currentImage === index ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="product-detail-info">
            <h2>{language === "ar" ? "وصف المنتج" : "Product Description"}</h2>
            <p>{product.description}</p>
            <h3>{language === "ar" ? "المميزات" : "Features"}</h3>
            <ul className="product-features">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* منتجات ذات صلة */}
        <div className="related-products">
          <SectionTitle
            title={language === "ar" ? "منتجات ذات صلة" : "Related Products"}
          />
          <div className="grid grid-3">
            {products
              .filter((p) => p.title !== product.title)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <div className="related-product-card card" key={index}>
                  <div className="product-image">
                    <img
                      src={
                        relatedProduct.img ||
                        `/assets/images/product-${relatedProduct.category}.jpg`
                      }
                      alt={relatedProduct.title}
                    />
                  </div>
                  <div className="product-content">
                    <h3>{relatedProduct.title}</h3>
                    <p>
                      {relatedProduct.description?.substring(0, 100) ||
                        (language === "ar"
                          ? "لا يوجد وصف متاح."
                          : "No description available.")}
                    </p>
                    <Link
                      to={`/products/${relatedProduct.category}`}
                      className="btn"
                    >
                      {language === "ar" ? "عرض التفاصيل" : "View Details"}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      {/* أنماط CSS */}
      <style>{`
        .product-detail-image {
          position: relative;
        }
        
        /* حاوية الصورة الرئيسية */
        .main-image-container {
          width: 100%;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 8px;
          margin-bottom: 15px;
          overflow: hidden;
        }
        
        /* الصورة الرئيسية */
        .main-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* يضمن ظهور الصورة كاملة بدون قص */
          border-radius: 8px;
        }
        
        .image-thumbnails {
          display: flex;
            justify-content: center; 
          gap: 10px;
          overflow-x: auto;
          padding: 5px 0;
        }
        
        .thumbnail {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .thumbnail:hover {
          opacity: 0.8;
        }
        
        .thumbnail.active {
          border-color: #007bff;
          transform: scale(1.05);
        }
        
        .product-detail-info h2,
        .product-detail-info h3 {
          color: #DC3545;
          margin-bottom: 12px;
        }
        
        /* تنسيق المميزات */
        .product-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .product-features li {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        
        /* شريط أزرق عند الـ hover */
        .product-features li::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          width: 0;
          background: #0a4d8c;
          transition: width 0.3s ease;
        }
        
        .product-features li:hover::before {
          width: 100%;
        }
        
        .product-features li:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.12);
        }
        
        .product-features .icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #0a4d8c;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          flex-shrink: 0;
          z-index: 2;
        }
        
        .product-features span {
          font-size: 1rem;
          color: #333;
          line-height: 1.4;
          z-index: 2;
        }
        
        /* Related Products */
        .related-product-card {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        
        .related-product-card .product-image {
          flex: none !important;
          max-height: 200px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        
        .related-product-card .product-image img {
          max-height: 200px;
          width: auto;
          max-width: 100%;
          object-fit: contain;  
        }
        
        .related-product-card .product-content {
          flex: 1 !important;
          padding: 10px !important;
          z-index: 1000 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;