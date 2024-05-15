import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Partners = () => {
  const imagePaths = [
    "/resources/businessbrand.png",
    "/resources/minimal.png",
    "/resources/strong.png",
    "/resources/toms.png",
    "/resources/highQuality.png",
    "/resources/mittos.png",
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center space-y-5 pb-10">
        <h1 className="text-center text-4xl lg:text-6xl font-bold">
          WE WORK <span className="text-primary">WITH</span>
        </h1>
        <hr className="border-b-2 border-b-primary w-1/12" />
      </div>
      <div className="swiper-container py-[1px] border-y">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500
          }}
          modules={[Autoplay,Pagination]}
          slidesPerView={3}
          className="swiper-wrapper gap-0"
        >
          {imagePaths.map((imagePath, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <img
                className="bg-primary/70 h-28 lg:h-44 p-5 w-full"
                src={imagePath}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
