import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguageHook } from "../../hooks/useLanguage";
import { productsData } from "../../utils/data";
import SectionTitle from "../../components/layout/SectionTitle";
import type { Product } from "../../types/product";
import "./ProductDetail.css"; 

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

  const displayImages: string[] =
    product.imgList && product.imgList.length > 0
      ? product.imgList
      : [product.img || `/assets/images/product-${product.category}.jpg`];

  return (
    <div className="page product-detail-page" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <SectionTitle title={product.title} />
        <div className="product-detail-content">
          <div className="product-detail-image">
            <div className="main-image-container">
              <img
                src={displayImages[currentImage]}
                alt={product.title}
                className="main-image"
              />
            </div>

            <div className="image-thumbnails">
              {displayImages.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setCurrentImage(index)}
                  className={`thumbnail ${currentImage === index ? "active" : ""}`}
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
    </div>
  );
};

export default ProductDetailPage;
