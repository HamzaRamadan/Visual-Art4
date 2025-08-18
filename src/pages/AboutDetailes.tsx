import AboutUs from "../components/sections/AboutUs";

const AboutDetailes = () => {
  return (
    <div className="page about-page">
      {/* الصورة ك Background ثابت */}
      <div className="about-image"></div>

      <div className="about-content">
        <AboutUs />
      </div>

      <style>
        {`
          .about-image {
            width: 100%;
            height: 50vh; 
            background-image: url('../../public/assets/images/logo2.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* تخليها ثابتة */
          }

          .about-content {
            position: relative;
            z-index: 1;
            background: #fff;
          }

         
        `}
      </style>
    </div>
  );
};

export default AboutDetailes;
