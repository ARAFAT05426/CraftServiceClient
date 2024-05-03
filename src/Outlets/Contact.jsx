import { BiPhoneCall } from "react-icons/bi";
import { IoChatbubbles } from "react-icons/io5";
import InpAny from "../InputFields/InpAny";
import BtnPrimary from "../Buttons/BtnPrimary";
const Contact = () => {
  const img = "https://source.unsplash.com/random/1920x1080";

  return (
    <section className="pt-5">
      <div className="py-10">
        <div
          className="h-[45vh] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
          }}
        >
          <h1 className="text-5xl font-bold text-white text-center py-8 lg:py-16">
            CONTACT US IF U FACE ANY PROBLEM
          </h1>
          <p className="text-white font-semibold max-w-2xl mx-auto text-center">
            We`d love to show you how you can get more traffic and leads,
            increase your sales productivity, provide better customer service,
            or all of the abovel Here are a few ways to reach out to our sales
            team.
          </p>
        </div>
        <div className="w-4/5 mx-auto px-5 py-10 bg-base-100 border shadow-md -mt-20 flex flex-col lg:flex-row space-y-3 justify-between">
          <div className="space-y-4 flex flex-col">
            <div className="px-5 py-3 border shadow w-full">
              <div className="flex items-center gap-3 justify-between">
                <BiPhoneCall className="text-6xl font-bold p-3 rounded-full border" />
                <h1 className="text-base-content font-semibold text-xl">
                  Call us directly at
                </h1>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-blue-700 text-2xl font-extrabold">
                  +353 1 512 4400
                </span>
                <p className="text-sm text-blue-500 hover:underline cursor-pointer font-semibold ">
                  See all numbers and locations
                </p>
              </div>
            </div>
            <div className="px-5 py-3 border shadow w-full">
              <div className="flex items-center gap-3 justify-between">
                <IoChatbubbles className="text-6xl font-bold p-3 rounded-full border" />
                <h1 className="text-base-content font-semibold text-xl">
                  Chat with our sales team
                </h1>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-blue-700 text-2xl font-extrabold">
                  +353 1 512 4400
                </span>
                <p className="text-sm text-blue-500 hover:underline cursor-pointer font-semibold ">
                  See all numbers and locations
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-center text-3xl font-semibold">Book a Meeting</h1>
              <p className="w-3/4 mx-auto text-center font-semibold">
                To schedule time to speak with one of our sales representatives,
                complete the form, then click `next` to choose a date and time
                that works for you.
              </p>
            </div>
            <div className="px-20">
                <InpAny title={"Name"}  />
                <InpAny title={"Email"}  />
                <textarea className="border px-5 py-3 w-full mt-6 font-semibold bg-base-200" placeholder="Describe your problem " rows="10"></textarea>
                <BtnPrimary cStyle={'w-full text-black hover:text-white mt-5 z-10'} title={"Submit"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
