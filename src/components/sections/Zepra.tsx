import React from 'react';

const Zepra = () => {
  return (
    <section style={styles.container}>
      <div style={styles.blueSpaceTop}></div>
      <img src="/assets/images/zepra.jpg" alt="Static" style={styles.image} />
      <div style={styles.blueSpaceBottom}></div>
    </section>
  );
};

export default Zepra;

// 🎨 Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
   image: {
    width: '100%',
    height: '100%',
  },
};

