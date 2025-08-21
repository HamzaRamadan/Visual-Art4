import './News.css';
import { useLanguageHook } from '../../hooks/useLanguage';
import SectionTitle from '../../components/layout/SectionTitle';

const newsCards = [
  {
    id: 1,
    titleAr: "افتتاح معرض فنون جديد",
    titleEn: "New Art Exhibition Opening",
    descriptionAr: "تم افتتاح معرض فنون جديد في وسط المدينة يضم أعمالاً رائعة لفنانين محليين.",
    descriptionEn: "A new art exhibition opened in the city center showcasing amazing works by local artists.",
    date: "2025-08-16",
    image: "/assets/images/Co Profile 70 Pages 03-images-54.jpg"
  },
  {
    id: 2,
    titleAr: "ورشة عمل للرسم الرقمي",
    titleEn: "Digital Painting Workshop",
    descriptionAr: "انضم إلى ورشة العمل عبر الإنترنت لتعلم الرسم الرقمي من خبراء المجال.",
    descriptionEn: "Join the online workshop to learn digital painting from industry experts.",
    date: "2025-08-10",
    image: "/assets/images/Co Profile 70 Pages 03-images-63.jpg"
  },
  {
    id: 3,
    titleAr: "تجديد صالة العرض الرئيسية",
    titleEn: "Main Gallery Renovation",
    descriptionAr: "تم تجديد صالة العرض الرئيسية بإضاءة ومساحات جديدة لعرض الأعمال الفنية.",
    descriptionEn: "The main gallery has been renovated with new lighting and spaces to display artworks.",
    date: "2025-08-01",
    image: "/assets/images/Co Profile 70 Pages 03-images-65.jpg"
  },
];

const News = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';

  const text = {
    date: isRTL ? 'منذ سنة' : '1 year ago',
    title: isRTL ? 'معرض مصنع الفارابي للطباعة 2025' : 'Al-Farabi Printing Factory Expo 2025',
    button: isRTL ? 'اقرأ المزيد' : 'Read More',
  };

  return (
    <div className={`news-page ${isRTL ? 'rtl' : 'ltr'}`}>
      {/*  الفيديو  */}
      <SectionTitle title={language === 'ar' ? 'الاخبار' : 'News '} />

      <div className="news-container">
        <div className="news-text">
          <p>{text.date}</p>
          <h2>{text.title}</h2>
          <button className="read-more-btn">{text.button}</button>
        </div>
        <div className="news-video">
          <video controls>
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="news-cards">
        {newsCards.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={isRTL ? news.titleAr : news.titleEn} />
            <div className="news-card-content">
              <h3>{isRTL ? news.titleAr : news.titleEn}</h3>
              <p>{isRTL ? news.descriptionAr : news.descriptionEn}</p>
              <span className="news-card-date">{news.date}</span>
              {/* <button className="read-more-btn">{text.button}</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
