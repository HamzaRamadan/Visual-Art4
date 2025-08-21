import React, { useState, useEffect, useRef } from 'react';
import './productionCapacity.css'
import { useLanguageHook } from '../../../hooks/useLanguage';
import { productionCapacityData } from '../../../utils/data';
import SectionTitle from '../../layout/SectionTitle';

// ✅ hook جديد: يراقب العنصر ويرجع isVisible
const useInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ✅ يحصل مرة واحدة بس
        }
      },
      { threshold: 0.3 } // يبدأ الأنيميشن لما 30% من العنصر يبان
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// ✅ component للعداد المتحرك
type AnimatedNumberProps = {
  target: number;
  suffix?: string;
  fixedText?: string;
  trigger?: boolean;
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, suffix, fixedText, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const duration = 2000; // 2 ثانية
    const stepTime = 1000 / 60;
    const totalSteps = duration / stepTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      const value = Math.floor(progress * target);
      setCount(value);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return (
    <span>
      {count}{suffix || ''}{fixedText || ''}
    </span>
  );
};

const ProductionCapacity: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const { ref: capacityRef, isVisible } = useInView(); // ✅ استخدم hook الجديد

  const capacity = productionCapacityData[language];

  return (
    <section
      className={`production-capacity-section ${isRTL ? 'rtl' : 'ltr'}`}
      ref={capacityRef}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="production-capacity-container">
        <SectionTitle title={capacity.title} />

        <div className="production-capacity-content">
          <div className="production-capacity-text">
            <p>{capacity.description}</p>
          </div>

          <div className="production-capacity-features">
            <ul>
              {capacity.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="production-capacity-stats">
            {/* 1B+ */}
            <div className="production-capacity-stat-card">
              <div className="stat-number">
                <AnimatedNumber target={1000} suffix="M+" trigger={isVisible} />
              </div>
              <div className="stat-label">
                {language === 'ar' ? 'علبة سنوياً' : 'Boxes Annually'}
              </div>
            </div>

            {/* 24/7 */}
            <div className="production-capacity-stat-card">
              <div className="stat-number">
                <AnimatedNumber target={24} fixedText="/7" trigger={isVisible} />
              </div>
              <div className="stat-label">
                {language === 'ar' ? 'إنتاج مستمر' : 'Continuous Production'}
              </div>
            </div>

            {/* 100% */}
            <div className="production-capacity-stat-card">
              <div className="stat-number">
                <AnimatedNumber target={100} suffix="%" trigger={isVisible} />
              </div>
              <div className="stat-label">
                {language === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionCapacity;
