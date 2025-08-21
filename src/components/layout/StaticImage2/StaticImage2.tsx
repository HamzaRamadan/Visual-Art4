import React, { useEffect, useRef, useState } from 'react';

const StaticImage2 = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [height, setHeight] = useState(getResponsiveHeight());

  function getResponsiveHeight() {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? '35vh' : '60vh';
    }
    return '60vh';
  }

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && bgRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const elementOffsetTop = rect.top + scrollTop;
        const parallaxOffset = (scrollTop - elementOffsetTop) * 0.4;
        setOffset(parallaxOffset);
      }
    };

    const handleResize = () => {
      setHeight(getResponsiveHeight());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} style={{ ...styles.container, height }}>
      <div
        ref={bgRef}
        style={{
          ...styles.background,
          transform: `translateX(-50%) translateY(${offset}px)`,
        }}
      />
      {/* المحتوى لو حبيت تضيفه */}
      {/* <div style={styles.content}>
        <h2 style={styles.title}>State-of-the-Art Printing Facility</h2>
        <p style={styles.subtitle}>Equipped with modern KBA offset technology</p>
      </div> */}
    </section>
  );
};

export default StaticImage2;

// 🎨 Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    minHeight: '200px',
    transition: 'height 0.3s ease',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: '50%',              // 🌟 وسط الصورة أفقياً
    height: '100%',
    width: '90%',             // 🌟 عرض أصغر شويه
    backgroundImage: 'url("/assets/images/KBA.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    transition: 'transform 0.1s linear',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: '#fff',
    padding: '100px 20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#f39c12',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};
