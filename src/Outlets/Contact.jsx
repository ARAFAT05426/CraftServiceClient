import { BiPhoneCall } from "react-icons/bi";
import { IoChatbubbles } from "react-icons/io5";
import { Fade, Flip } from "react-awesome-reveal"; // Import Fade animation from react-awesome-reveal
import InpAny from "../InputFields/InpAny";
import BtnPrimary from "../Buttons/BtnPrimary";

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
      phoneNumber: "+353 1 512 4400",
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
                <InpAny title={"Name"} />
                <InpAny title={"Email"} />
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
  );
};

export default Contact;
