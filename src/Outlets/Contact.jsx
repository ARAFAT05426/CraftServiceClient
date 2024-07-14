<<<<<<< HEAD
import { BiPhoneCall } from "react-icons/bi";
import { IoChatbubbles } from "react-icons/io5";
import { Fade, Flip } from "react-awesome-reveal"; // Import Fade animation from react-awesome-reveal
import BtnPrimary from "../Buttons/BtnPrimary";
import InpDummy from "../InputFields/InpDummy";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const img = "https://source.unsplash.com/random/1920x1080";
  const contactMethods = [
    {
      icon: (
        <BiPhoneCall className="text-6xl font-bold p-3 rounded-full border" />
      ),
      title: "Call us directly at",
      phoneNumber: "+353 1 512 4400",
    },
    {
      icon: (
        <IoChatbubbles className="text-6xl font-bold p-3 rounded-full border" />
      ),
      title: "Chat with our sales team",
      phoneNumber: "+012 6666 8888",
    },
  ];
  const description = [
    `We'd love to show you how you can get more traffic and leads,
  increase your sales productivity, provide better customer service,
  or all of the above. Here are a few ways to reach out to our sales
  team.`,
    `To schedule time to speak with one of our sales representatives,
  complete the form, then click 'next' to choose a date and time
  that works for you.`,
  ];
  return (
    <section className="pt-5">
      <Helmet>
        <title>KraftFix | Contact</title>
      </Helmet>
      <div className="py-10">
        <div
          className="h-[45vh] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
          }}
        >
          <Fade direction="up"> {/* Use Fade animation with "up" direction */}
            <h1 className="text-5xl font-bold text-white text-center py-8 lg:py-16">
              CONTACT US IF U FACE ANY PROBLEM
            </h1>
            <p className="text-white font-semibold max-w-2xl mx-auto text-center">
              {description[0]}
            </p>
          </Fade>
        </div>
        <div className="w-[95%] lg:w-4/5 mx-auto px-5 py-10 bg-base-100 border shadow-md -mt-20 flex flex-col lg:flex-row space-y-3 justify-between">
          <div className="space-y-4 flex flex-col">
            {contactMethods.map((method, index) => (
              <Fade key={index} direction="down" delay={index * 150}> {/* Use Fade animation with "down" direction */}
                <div className="px-5 py-3 border shadow w-full">
                  <div className="flex items-center gap-3 justify-between">
                    {method.icon}
                    <h1 className="text-base-content font-semibold text-xl">
                      {method.title}
                    </h1>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-blue-700 text-2xl font-extrabold">
                      {method.phoneNumber}
                    </span>
                    <Fade cascade delay={index * 150}> {/* Use Fade animation */}
                      <p className="text-sm text-blue-500 hover:underline cursor-pointer font-semibold">
                        See all numbers and locations
                      </p>
                    </Fade>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div>
            <Fade direction="up"> {/* Use Fade animation with "up" direction */}
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-center text-3xl font-semibold">
                  Book a Meeting
                </h1>
                <p className="w-3/4 mx-auto text-center font-semibold">
                  {description[1]}
                </p>
              </div>
            </Fade>
            <Flip direction="horizontal" delay={300}> {/* Use Fade animation with "up" direction */}
              <div className="px-3 lg:px-20">
                <InpDummy title={"Name"} />
                <InpDummy title={"Email"} />
                <textarea
                  className="border px-5 py-3 w-full mt-6 font-semibold bg-base-200"
                  placeholder="Describe your problem"
                  rows="10"
                ></textarea>
                <BtnPrimary
                  cStyle={"w-full mt-5 z-10"}
                  title={"Submit"}
                />
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </section>
=======
const Contact = () => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen px-3 md:px-20 lg:px-32 my-16 lg:my-12">
        <div className="grid grid-cols-1 gap-8 px-8 py-16 w-full rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-card_bg text-gray-800 shadow-xl">
          <div className="flex flex-col justify-between space-y-4">
            <div data-aos="flip-down" data-aos-duration="400">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let`s talk!
              </h2>
              <p>Have question? Feel free to contact us</p>
            </div>
            <img
              src="https://i.ibb.co/f43GqtM/12982910-5124556-removebg.png"
              alt=""
              className="p-6 h-auto max-h-64 md:max-h-full"
            />
          </div>
          <form noValidate="" className="space-y-6 flex flex-col">
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border-2 p-3 rounded bg-white/80 text-nav_bg focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border-2 p-3 rounded bg-white/80 text-nav_bg focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
              />
            </div>
            <div className="grow space-y-3">
              <label htmlFor="message" className="text-lg font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Enter your message"
                className="w-full h-[94%] border-2 p-3 rounded bg-white/80 text-nav_bg focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg mt-5 font-bold tracking-wide uppercase rounded bg-btn_bg text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
  );
};

export default Contact;
