import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiCargoCrate } from "react-icons/gi";
import { PiGarageDuotone } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
const WhyChooseUs = () => {
  return (
    <section className="space-y-7">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-4xl lg:text-6xl font-bold">
          WHY CHOOSE <span className="text-primary">KRAFTFIX</span>
        </h1>
        <hr className="border-b-2 border-b-primary w-2/12" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around pt-10 w-full lg:w-3/4 mx-auto">
        <Fade direction="up" duration={700}>
          <div className="flex flex-col items-center space-y-3">
            <button className="text-9xl h-56 w-56 p-5 rounded-full border-2 border-primary  text-center">
              <HiOutlineHomeModern className="text-9xl mx-auto h-48 w-4h-48 text-primary " />
            </button>
            <h1 className="text-xl font-semibold">OVER 15 YEARS EXPERIENCE</h1>
            <hr className="border-b-2 border-b-primary w-1/12" />
            <p className="max-w-xs text-center">
              "With over 15 years of hands-on experience in home repair, rest
              assured you're getting a skilled professional adept at handling a
              diverse range of maintenance and renovation tasks with precision
              and efficiency."
            </p>
          </div>
        </Fade>
        <Fade direction="up" delay={600}>
          <div className="flex flex-col items-center space-y-3">
            <button className="text-9xl h-56 w-56 p-5 rounded-full border-2 border-primary  text-center">
              <GiCargoCrate className="text-9xl mx-auto h-48 w-4h-48 text-primary " />
            </button>
            <h1 className="text-xl font-semibold">BEST MATERIALS</h1>
            <hr className="border-b-2 border-b-primary w-1/12" />
            <p className="max-w-xs text-center">
              "Discover top-tier construction materials tailored to enhance
              durability, functionality, and aesthetics. From robust concrete
              and steel to elegant stone and wood, our selection ensures quality
              craftsmanship and lasting performance for your project."
            </p>
          </div>
        </Fade>
        <Fade direction="up" delay={800}>
          <div className="flex flex-col items-center space-y-3">
            <button className="text-9xl h-56 w-56 p-5 rounded-full border-2 border-primary  text-center">
              <PiGarageDuotone className="text-9xl mx-auto h-48 w-4h-48 text-primary " />
            </button>
            <h1 className="text-xl font-semibold">PROFESSIONAL STANDARDS</h1>
            <hr className="border-b-2 border-b-primary w-1/12" />
            <p className="max-w-xs text-center">
              "Adhering to professional standards ensures integrity,
              reliability, and excellence in every project. By upholding
              industry best practices, regulations, and ethical guidelines, we
              guarantee superior craftsmanship, safety, and customer
              satisfaction at every stage of the construction process."
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhyChooseUs;
