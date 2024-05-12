import { Parallax } from "react-parallax";

const ClientParalax = () => {
  // Array of data for mapping
  const data = [
    { number: 751, overlayText: "COMPLETED PROJECTS" },
    { number: 149, overlayText: "EXPERT WORKERS" },
    { number: 51, overlayText: "AWARD WINNER" },
    { number: 1360, overlayText: "HAPPY CUSTOMERS" },
  ];

  return (
    <section className="">
      <Parallax
        className="w-full h-[40vh] flex flex-col space-y-5"
        blur={{ min: -15, max: 25 }}
        bgImage="/public/resources/paralaxImg.jpg"
        bgImageAlt="paralaxImg"
        strength={500}
      >
        <div className="pt-16">
          <div className="flex items-center justify-center">
            <hr className="border-primary border-b-[1.5px] rounded-3xl w-2/5" />
            <p className="text-center px-5 text-base-300 font-extrabold">Some Facts</p>
            <hr className="border-primary border-b-[1px] rounded-3xl w-2/5" />
          </div>
          <h1 className="text-center text-5xl font-black text-base-200">
            LET THE <span className="text-primary">NUMBERS</span> SPEAK{" "}
          </h1>
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto py-10">
          {data.map((item, index) => (
            <div className="relative w-52" key={index}>
              <h1 className="font-bold text-8xl font-sideHeading text-secondary/75">
                {item.number}
              </h1>
              <div className="absolute inset-0 w-fit mx-auto flex items-center justify-center">
                <h1 className="text-white text-xl text-center text-nowrap font-bold">
                  {item.overlayText}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default ClientParalax;
