import React, { useEffect, useState } from 'react';
import { useLanguageHook } from '../../hooks/useLanguage';
import { logisticsData } from '../../utils/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../layout/SectionTitle';

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

      {/* 🔥 نفس الـ CSS بتاعك */}
      <style>
        {`
          .logistics-section {
            padding: 72px 0 84px;
            background: #f5f7fb;
          }

          .logistics-container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .logistics-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }

          .logistics-text p {
            max-width: 860px;
            margin: 0 auto;
            text-align: center;
            font-size: 18px;
            line-height: 1.85;
            color: #3a4a5c;
            background: #ffffffcc;
            padding: 20px 24px;
            border-radius: 14px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          }

          .logistics-features ul {
            max-width: 860px;
            margin: 4px auto 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px 18px;
            list-style: none;
            padding: 0;
          }

          .logistics-features li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            background: #fff;
            border: 1px solid rgba(10,77,140,0.06);
            padding: 12px 14px;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(10,77,140,0.06);
            transition: transform .15s ease, box-shadow .15s ease;
          }

          .logistics-features li:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(10,77,140,0.10);
          }

          .logistics-features i {
            font-size: 15px;
            line-height: 1;
            color: #0a4d8c;
            margin-top: 3px;
          }

          .logistics-features span {
            color: #4b5b6b;
            font-size: 15.5px;
          }

          .logistics-stats {
            width: 100%;
            max-width: 860px;
            margin-top: 6px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }

          .logistics-stat-card {
            background: #fff;
            border: 1px solid rgba(10,77,140,0.06);
            border-radius: 16px;
            padding: 22px 24px;
            text-align: center;
            box-shadow: 0 12px 32px rgba(10,77,140,0.08);
            transition: transform .15s ease, box-shadow .15s ease;
          }

          .logistics-stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 40px rgba(10,77,140,0.12);
          }

          .logistics-stat-card .stat-number {
            font-size: 30px;
            font-weight: 800;
            color: #0a4d8c;
            letter-spacing: 0.3px;
            margin-bottom: 6px;
          }

          .logistics-stat-card .stat-label {
            font-size: 14.5px;
            color: #66788a;
            font-weight: 600;
          }

          [dir="rtl"] .logistics-features ul { direction: rtl; }
          [dir="rtl"] .logistics-features li { flex-direction: row-reverse; }
          [dir="rtl"] .logistics-features i { margin-top: 3px; }

          @media (max-width: 768px) {
            .logistics-text p {
              font-size: 16px;
              padding: 16px 18px;
            }
            .logistics-features ul {
              grid-template-columns: 1fr;
            }
            .logistics-stats {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Logistics;
