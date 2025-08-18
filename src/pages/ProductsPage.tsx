// ProductsPage.tsx
import React, { useState, useEffect } from 'react';
import { useLanguageHook } from '../hooks/useLanguage';
import { productsData } from '../utils/data';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/layout/SectionTitle';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  const products = productsData[language];
  
  // الحصول على الفئات الفريدة
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
  
  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All' },
    ...uniqueCategories.map(category => ({ 
      id: category, 
      name: category.charAt(0).toUpperCase() + category.slice(1) 
    }))
  ];
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, products]);
  
  return (
    <div className="page products-page" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <SectionTitle title={language === 'ar' ? 'منتجاتنا' : 'Our Products'} />
        
        <div className="products-filter">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.category} 
              product={product} 
              index={products.indexOf(product)} 
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>{language === 'ar' ? 'لا توجد منتجات في هذه الفئة' : 'No products in this category'}</h3>
            <button 
              className="back-btn"
              onClick={() => setActiveCategory('all')}
            >
              {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;