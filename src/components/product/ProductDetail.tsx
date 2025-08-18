import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguageHook } from '../../hooks/useLanguage';
import { productsData } from '../../utils/data';

const ProductDetail: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const { category } = useParams<{ category: string }>();
  
  const products = productsData[language];
  const product = products.find(p => p.category === category);
  
  if (!product) {
    return (
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <h2>{language === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}</h2>
        <p>{language === 'ar' ? 'عذراً، المنتج الذي تبحث عنه غير موجود.' : 'Sorry, the product you are looking for does not exist.'}</p>
      </div>
    );
  }

  return (
    <div className="product-detail container" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="product-detail-header">
        <h1>{product.title}</h1>
      </div>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={`/assets/images/product-${products.indexOf(product) + 1}.jpg`} alt={product.title} />
        </div>
        
        <div className="product-detail-info">
          <h2>{language === 'ar' ? 'وصف المنتج' : 'Product Description'}</h2>
          <p>{product.description}</p>
          
          <h3>{language === 'ar' ? 'المميزات' : 'Features'}</h3>
          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="product-detail-actions">
            <button className="btn">
              {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
            </button>
            <button className="btn btn-outline">
              {language === 'ar' ? 'اطلب عينة' : 'Request Sample'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;