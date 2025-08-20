import React from 'react';

const Zepra = () => {
  const isMobile = window.innerWidth <= 768; // يعتبر فون لو الشاشة صغيرة

  const containerHeight = isMobile ? '50vh' : '80vh'; // ارتفاع مختلف للفون

  return (
    <section style={{ ...styles.container, height: containerHeight }}>
      <img src="/assets/images/zepra.jpg" alt="Static" style={styles.image} />
    </section>
  );
};

export default Zepra;

// 🎨 Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // الصورة كلها تظهر بدون قص
  },
};
