import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import Btn_Illuminate from "../Buttons/Btn_Illuminate";

const Banner = () => {
  const [hovered, setHovered] = useState(false);
  const images = [
    "https://source.unsplash.com/featured/?exotic",
    "https://source.unsplash.com/featured/?tropical",
    "https://source.unsplash.com/featured/?paradise",
    "https://source.unsplash.com/featured/?island",
    "https://source.unsplash.com/featured/?beach",
    "https://source.unsplash.com/featured/?resort",
  ];

  return (
    <section
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="nav_h_minus pt-20 overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        className="mySwiper relative"
        pagination={{ dynamicBullets: true }}
        loop={true}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        style={{ "--swiper-pagination-color": "#000" }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen bg-no-repeat bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item})` }}
            >
              <div className="px-32 flex flex-col space-y-3 justify-center h-lvh my-auto">
                <Fade direction="down" duration={1000}>
                  <h1 className="text-7xl font-semibold text-white">
                    Hello Swiper
                  </h1>
                </Fade>
                <Fade direction="up" delay={600} className="-ml-4">
                  <p className="text-base bg-white bg-opacity-15 rounded-lg backdrop-blur-sm max-w-4xl px-5 py-3 ml-3 border-b-1 border-r-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium tempore veniam tempora esse aliquam ad hic
                    distinctio corporis ipsa eos in laboriosam doloremque quae,
                    ducimus inventore consequuntur accusantium ullam quo
                    necessitatibus possimus exercitationem explicabo debitis.
                    Incidunt voluptate veniam recusandae adipisci unde tempore
                    nesciunt, placeat qui voluptatum minus! Doloremque, quasi
                    pariatur.
                  </p>
                </Fade>
                <Fade direction="up" delay={750}>
                  <Btn_Illuminate text={"hello Swiper"} />
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-between items-center">
          <button
            id="prev"
            className={`px-4 py-2 ${
              hovered ? "opacity-100" : "opacity-0"
            } bg-black absolute top-1/2 left-0 z-20 rounded-r cursor-pointer`}
          >
            <HiOutlineArrowLongLeft className="text-3xl text-white" />
          </button>
          <button
            id="next"
            className={`px-4 py-2 ${
              hovered ? "opacity-100" : "opacity-0"
            } bg-black absolute top-1/2 right-0 z-20 rounded-l cursor-pointer transition-all`}
          >
            <HiOutlineArrowLongRight className="text-3xl text-white" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
