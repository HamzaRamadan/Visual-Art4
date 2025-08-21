import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageHook } from '../../hooks/useLanguage';
import { productsData } from '../../utils/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../layout/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import '../../../public/assets/styles/swiper.css';

const Products: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const productsRef = useScrollAnimation();
  const products = productsData[language];
  const [swiperKey, setSwiperKey] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useEffect(() => {
    setSwiperKey(prevKey => prevKey + 1);
  }, [language]);

  return (
    <section className="products section" ref={productsRef} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <SectionTitle title={language === 'ar' ? 'منتجاتنا' : 'Our Products'} />
        <div className="products-slider-wrapper">
          <Swiper
            key={swiperKey}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="products-swiper"
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 25
              },
              // when window width is >= 992px
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-card card">
                  <div className="product-image">
                    <img
                      src={product.img || `/assets/images/product-${index + 1}.jpg`}
                      alt={product.title}
                    />
                  </div>
                  <div className="product-content">
                    <h3>{product.title}</h3>
                   
                    <Link to={`/products/${product.category}`} className="btn">
                      {language === 'ar' ? 'المزيد' : 'Learn More'}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev-custom"></div>
          <div className="swiper-button-next-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;