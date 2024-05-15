import { Fade, Flip } from "react-awesome-reveal";
import { Parallax } from "react-parallax";
import clientImg from "/resources/paralaxImg.jpg"
const ClientParalax = () => {
  const data = [
    { number: 751, overlayText: "COMPLETED PROJECTS" },
    { number: 149, overlayText: "EXPERT WORKERS" },
    { number: 51, overlayText: "AWARD WINNER" },
    { number: 1360, overlayText: "HAPPY CUSTOMERS" },
  ];

  return (
    <section className="">
      <Parallax
        className="w-full h-[65vh] lg:h-[40vh] flex flex-col space-y-5"
        blur={{ min: -15, max: 25 }}
        bgImage={clientImg}
        bgImageAlt="paralaxImg"
        strength={500}
      >
        <div className="pt-16">
          <div className="flex items-center justify-center">
            <Fade direction="left" duration={1100} className="w-1/4 lg:w-2/5">
              <hr className="border-primary border-b-[1.5px] rounded-3xl w-full" />
            </Fade>
            <Fade direction="down" duration={1000}>
              <p className="text-center px-5 text-base-300 font-extrabold">
                Some Facts
              </p>
            </Fade>
            <Fade direction="right" duration={1100} className="w-1/4 lg:w-2/5">
              <hr className="border-primary border-b-[1.5px] rounded-3xl w-full" />
            </Fade>
          </div>
          <Fade direction="down" delay={1200}>
            <h1 className="text-center text-4xl lg:text-5xl font-black text-base-200">
              LET THE <span className="text-primary">NUMBERS</span> SPEAK{" "}
            </h1>
          </Fade>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-5 w-4/5 mx-auto py-10">
          <Flip direction="horizontal" duration={1700}>
            {data.map((item, index) => (
              <div className="relative w-52" key={index}>
                <h1 className="font-bold text-7xl lg:text-8xl text-center font-sideHeading text-secondary/75">
                  {item.number}
                </h1>
                <div className="absolute inset-0 w-fit mx-auto flex items-center justify-center">
                  <h1 className="text-white text-xl text-center text-nowrap font-bold">
                    {item.overlayText}
                  </h1>
                </div>
              </div>
            ))}
          </Flip>
        </div>
      </Parallax>
    </section>
  );
};

export default ClientParalax;
