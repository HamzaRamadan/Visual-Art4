import React, { useEffect, useRef, useState } from 'react';

const StaticImage2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = rect.top + scrollPosition;
      
      // حساب الإزاحة المطلوبة للصورة
      const newOffset = scrollPosition - sectionTop;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={styles.container}>
      <div style={{ ...styles.imageWrapper, transform: `translateY(${offset}px)` }}>
        <div style={styles.fixedImage} />
      </div>
    </section>
  );
};

export default StaticImage2;

// 🎨 Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '90%',
    height: '80vh',
    margin:'0 auto',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius:'10px'
  },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    willChange: 'transform', 
  },
  fixedImage: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/assets/images/KBA.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // إصلاحات خاصة بـ iOS
    WebkitTransform: 'translateZ(0)',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
  },
  
};