import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Fade, Flip } from "react-awesome-reveal";
import BtnSecondary from "../Buttons/BtnSecondary";
import { Parallax } from "react-parallax";
import { useState } from "react";

const Banner = () => {
  const [hovered, setHovered] = useState(false);
  const images = [
    {
      src: '/resources/banner1.jpg',
      heading: 'Expert Home Repair Solutions',
      description: 'From minor fixes to major renovations, our team delivers top-notch home repair services tailored to your needs.',
    },
    {
      src: '/resources/banner2.jpg',
      heading: 'Your Trusted Home Repair Partner',
      description: 'Count on us to promptly address any household repair issues, ensuring your home remains a safe and comfortable haven.',
    },
    {
      src: '/resources/banner3.jpg',
      heading: 'Quality Repairs, Exceptional Service',
      description: 'Let our skilled professionals handle all your home repair projects with precision and care, leaving you worry-free.',
    },
    {
      src: '/resources/paralaxImg.jpg',
      heading: 'Transform Your Home with Us',
      description: 'Experience the difference our comprehensive home repair solutions can make in enhancing the functionality and aesthetics of your living space.',
    }
  ];
  

  return (
    <section
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper relative"
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
        grabCursor={false}
        style={{ "--swiper-pagination-color": "#000" }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Parallax
              bgImage={item?.src}
              className="flex items-center h-[80vh] lg:min-h-screen bg-cover bg-center"
              bgImageAlt="background"
              strength={1000}
            >
              <div className="px-10 lg:px-32 flex flex-col space-y-3 justify-center h-96 my-auto">
                <Fade direction="down" duration={1000}>
                  <h1 className="text-5xl lg:text-7xl font-semibold text-white">
                    {item?.heading}
                  </h1>
                </Fade>
                <Fade direction="up" delay={600} className="-ml-4">
                  <p className="text-sm lg:text-base bg-primary bg-opacity-15 rounded-lg  backdrop-blur-sm max-w-4xl px-5 py-3 ml-3 border-b-1 border-r-1 cursor-text">
                    {item?.description}
                  </p>
                </Fade>
                <Flip direction="horizontal" delay={1000}>
                  <BtnSecondary title={"Explore More"} />
                </Flip>
              </div>
            </Parallax>
          </SwiperSlide>
        ))}
        <div className="flex justify-between items-center">
          <button
            id="prev"
            className={`px-3 py-1 ${
              hovered ? "opacity-100" : "opacity-0"
            } bg-primary bg-opacity-65 absolute top-1/2 left-0 z-20 rounded-r transition duration-500`}
          >
            <MdKeyboardArrowLeft className="text-3xl text-white" />
          </button>
          <button
            id="next"
            className={`px-3 py-1 ${
              hovered ? "opacity-100" : "opacity-0"
            } bg-primary bg-opacity-65 absolute top-1/2 right-0 z-20 rounded-l transition duration-500`}
          >
            <MdKeyboardArrowRight className="text-3xl text-white" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
