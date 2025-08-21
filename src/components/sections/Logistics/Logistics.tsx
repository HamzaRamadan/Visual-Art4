import React, { useEffect, useState } from 'react';
import './logistics.css';
import { useLanguageHook } from '../../../hooks/useLanguage';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { logisticsData } from '../../../utils/data';
import SectionTitle from '../../layout/SectionTitle';

const Logistics: React.FC = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';
  const logisticsRef = useScrollAnimation();
  const logistics = logisticsData[language];

  // 🟢 state للأرقام المتحركة
  const [stats, setStats] = useState({
    warehouses: 0,
    trucks: 0,
    accuracy: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateNumbers();
          observer.disconnect(); // ✅ عشان ميكررش
        }
      },
      { threshold: 0.4 }
    );

    if (logisticsRef.current) {
      observer.observe(logisticsRef.current);
    }

    return () => observer.disconnect();
  }, [logisticsRef]);

  // 🟢 فانكشن الانيميشن
  const animateNumbers = () => {
    animateValue("warehouses", 0, 50, 1500);
    animateValue("trucks", 0, 200, 2000);
    animateValue("accuracy", 0, 99, 1800);
  };

  const animateValue = (key: keyof typeof stats, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setStats((prev) => ({
        ...prev,
        [key]: Math.floor(progress * (end - start) + start),
      }));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section
      className="logistics-section"
      ref={logisticsRef}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="logistics-container">
        <SectionTitle title={logistics.title} />

        <div className="logistics-content">
          {/* الوصف */}
          <div className="logistics-text">
            <p>{logistics.description}</p>
          </div>

          {/* المميزات */}
          <div className="logistics-features">
            <ul>
              {logistics.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-warehouse" aria-hidden="true"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* الإحصائيات */}
          <div className="logistics-stats">
            <div className="logistics-stat-card">
              <div className="stat-number">{stats.warehouses}+</div>
              <div className="stat-label">
                {language === 'ar' ? 'مخازن نشطة' : 'Active Warehouses'}
              </div>
            </div>

            <div className="logistics-stat-card">
              <div className="stat-number">{stats.trucks}+</div>
              <div className="stat-label">
                {language === 'ar' ? 'شاحنات يومياً' : 'Daily Trucks'}
              </div>
            </div>

            <div className="logistics-stat-card">
              <div className="stat-number">{stats.accuracy}%</div>
              <div className="stat-label">
                {language === 'ar' ? 'دقة التسليم' : 'Delivery Accuracy'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
