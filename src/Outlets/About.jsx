import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { BiMap } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const About = () => {
  const personImageUrls = [
    "/public/resources/team01.png",
    "/public/resources/team02.png",
    "/public/resources/team03.png",
    "/public/resources/team04.png",
    "/public/resources/team05.jpg",
    "/public/resources/team06.png",
    "/public/resources/team07.jpg",
  ];
  return (
    <section>
      <Helmet>
        <title>Kraftfix | About</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <Fade direction="left" triggerOnce>
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-teal-accent-400">
                <BiMap className="text-teal-900 w-8 h-8" />
              </div>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div className="mb-6">
                <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Let us handle
                  <br className="hidden md:block" />
                  your next{" "}
                  <span className="text-deep-purple-accent-400">
                    destination
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div>
                <button className="inline-flex items-center font-semibold text-deep-purple-accent-400 hover:text-deep-purple-800">
                  Learn more
                  <BsFillArrowRightSquareFill className="inline-block w-4 ml-2" />
                </button>
              </div>
            </Fade>
          </div>
          <div className="flex items-center justify-center lg:pl-8">
            <Fade direction="right" triggerOnce>
              <div className="flex flex-col items-end">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
                <img
                  className="object-cover w-32 h-32 rounded shadow-lg sm:h-48 xl:h-64 sm:w-48 xl:w-64 mt-6"
                  src="https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-5">
          <Fade direction="right">
            <div className="space-y-3">
              <h1 className="text-5xl font-semibold text-left lg:text-right ">
                Our Creative Team
              </h1>
              <p className="max-w-lg text-left lg:text-right font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione ut nemo rerum. Tenetur, consequuntur harum tempore
                quisquam totam similique cupiditate, incidunt nesciunt delectus
                beatae blanditiis accusantium quas perferendis earum eveniet
                itaque, sit expedita nulla minima voluptates maxime. Temporibus
                sed maxime dicta ipsam incidunt iste dolore distinctio obcaecati
                odio iure facilis, culpa saepe autem, pariatur ipsa delectus
                commodi et beatae laborum, dolor velit libero qui voluptatibus.
                Quis rerum saepe dolorem itaque?
              </p>
            </div>
          </Fade>
          <div>
            <div className="flex justify-between items-center gap-5 w-full p-5 ">
              <div className="flex flex-col items-end space-y-2">
                <img
                  className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out h-20 sm:h-32 xl:h-40 w-20 sm:w-32 xl:w-40 border border-white"
                  src={personImageUrls[0]}
                  alt="Team member 1"
                />
                <img
                  className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-32 sm:h-48 xl:h-64 sm:w-48 xl:w-64 mt-6 border border-white"
                  src={personImageUrls[6]}
                  alt="Team member 6"
                />
                <img
                  className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-20 h-20 sm:h-28 xl:h-48 sm:w-32 xl:w-48 border border-white"
                  src={personImageUrls[1]}
                  alt="Team member 2"
                />
                <img
                  className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-20 h-20 sm:h-32 xl:h-28 sm:w-32 xl:w-28 border border-white"
                  src={personImageUrls[2]}
                  alt="Team member 3"
                />
              </div>
              <Fade direction="right" triggerOnce>
                <div className="flex flex-col items-start">
                  <img
                    className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-40 h-40 sm:h-64 xl:h-80 sm:w-64 xl:w-80 border border-white"
                    src={personImageUrls[3]}
                    alt="Team member 4"
                  />
                  <img
                    className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-32 sm:h-48 xl:h-64 sm:w-48 xl:w-64 mt-6 border border-white"
                    src={personImageUrls[4]}
                    alt="Team member 5"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
