// pages/ProductDetailPage.tsx
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

  return (
    <div className="page product-detail-page" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <SectionTitle title={product.title} />

        <div className="product-detail-content">
          <div className="product-detail-image">
            {product.images && product.images.length > 0 ? (
              <>
                {/* الصورة الرئيسية عند وجود صور متعددة */}
                <img
                  src={product.images[currentImage]}
                  alt={product.title}
                  className="main-image"
                />

                {/* الصور المصغرة */}
                <div className="image-thumbnails">
                  {product.images.map((img, index) => (
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
              </>
            ) : (
              <>
                {/* الصورة الوحيدة عند عدم وجود صور متعددة */}
                <img
                  src={
                    product.img ||
                    `/assets/images/product-${product.category}.jpg`
                  }
                  alt={product.title}
                  className="main-image"
                />

                {/* صورة مصغرة واحدة */}
                <div className="image-thumbnails">
                  <img
                    src={
                      product.img ||
                      `/assets/images/product-${product.category}.jpg`
                    }
                    alt="Thumbnail"
                    onClick={() => setCurrentImage(0)}
                    className="thumbnail active"
                  />
                </div>
              </>
            )}
          </div>

          <div className="product-detail-info">
            <h2>{language === "ar" ? "وصف المنتج" : "Product Description"}</h2>
            <p>{product.description}</p>

            <h3>{language === "ar" ? "المميزات" : "Features"}</h3>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* <div className="product-detail-actions">
              <button className="btn">
                {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </button>
              <button className="btn btn-outline">
                {language === 'ar' ? 'اطلب عينة' : 'Request Sample'}
              </button>
            </div> */}
          </div>
        </div>

        <div className="related-products">
          <SectionTitle
            title={language === "ar" ? "منتجات ذات صلة" : "Related Products"}
          />
          <div className="grid grid-3">
            {products
              .filter((p) => p.category !== product.category)
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
                    <p>{relatedProduct.description.substring(0, 100)}...</p>
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

      {/* أنماط CSS مدمجة للصور */}
      <style>{`
        .product-detail-image {
          position: relative;
        }
        
        .main-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        
        .image-thumbnails {
          display: flex;
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
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
