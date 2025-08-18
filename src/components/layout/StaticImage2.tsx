import React from 'react';

const StaticImage2 = () => {
  return (
    <section style={styles.container}>
      {/* <div style={styles.overlay}></div> */}
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
    width: '100%',
    height: '60vh', // ⬅️ ارتفاع أصغر زي الكود الأصلي
    backgroundImage: 'url("/assets/images/KBA.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // ✨ الصورة تفضل ثابته ورا
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px',
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
    marginBottom: '20px',
    color: '#f39c12',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};
