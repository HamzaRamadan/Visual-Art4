import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguageHook } from '../../hooks/useLanguage';
import { productsData } from '../../utils/data';
import ProductCard from './ProductCard';

const ProductCategory: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const { category } = useParams<{ category: string }>();
  
  const products = productsData[language];
  const categoryProducts = products.filter(product => product.category === category);
  
  if (categoryProducts.length === 0) {
    return (
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <h2>{language === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}</h2>
        <p>{language === 'ar' ? 'عذراً، المنتج الذي تبحث عنه غير موجود.' : 'Sorry, the product you are looking for does not exist.'}</p>
      </div>
    );
  }

  return (
    <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
      <h2 className="category-title">{categoryProducts[0].title}</h2>
      <div className="grid grid-3">
        {categoryProducts.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;