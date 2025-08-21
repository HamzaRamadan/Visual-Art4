import React from "react";

const Zepra = () => {
  return (
    <section style={styles.container} className="zepra-container">
      <img
        src="/assets/images/zepra.jpg"
        alt="Static"
        style={styles.image}
        className="zepra-image"
      />
    </section>
  );
};

export default Zepra;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    height: "80vh", // ديفولت على الديسكتوب
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "95%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

// 📱 Media Queries
if (typeof document !== "undefined") {
  const mobileStyles = `
    @media (max-width: 768px) {
      .zepra-container {
        height: 50vh !important; /* أصغر على الموبايل */
      }
      .zepra-image {
        width: 100% !important;  /* تخليها تاخد العرض كله */
        border-radius: 5px;      /* زوايا أصغر على الموبايل */
      }
    }
  `;
  const styleTag = document.createElement("style");
  styleTag.innerHTML = mobileStyles;
  document.head.appendChild(styleTag);
}
