import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center px-1 lg:px-32">
      <div>
        <img src="/resources/faq.png" alt="Frequently Asked Questions" />
      </div>
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>

        <div className="mt-4 lg:mt-12 space-y-1 bg-base-200 p-3 rounded-md">
          <div>
            <h1 className="text-center text-6xl font-semibold">FA<span className="text-primary">Q</span></h1>
          </div>
          <div className="rounded border-b">
            <button
              onClick={() => toggleAccordion(0)}
              className="flex items-center justify-between w-full p-8"
            >
              <h1 className="font-semibold">How can I book my appointment?</h1>

              <span className="p-[2px] bg-primary rounded-full">
                {isOpen === 0 ? (
                  <HiOutlineMinus className="w-6 h-6" />
                ) : (
                  <GoPlus className="w-6 h-6" />
                )}
              </span>
            </button>

            {isOpen === 0 && (
              <>
                <hr className="border-primary" />

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  You can book your appointment by contacting us through our
                  website or by calling our customer service hotline. Our
                  friendly staff will assist you in scheduling a convenient time
                  for our expert team to visit your home.
                </p>
              </>
            )}
          </div>
          <div className="rounded border-b">
            <button
              onClick={() => toggleAccordion(1)}
              className="flex items-center justify-between w-full p-8"
            >
              <h1 className="font-semibold">
                What types of repair services do you offer?
              </h1>

              <span className="p-[2px] bg-primary rounded-full">
                {isOpen === 1 ? (
                  <HiOutlineMinus className="w-6 h-6" />
                ) : (
                  <GoPlus className="w-6 h-6" />
                )}
              </span>
            </button>

            {isOpen === 1 && (
              <>
                <hr className="border-primary" />

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  We offer a wide range of repair services including plumbing,
                  electrical, carpentry, painting, and more. Whether it's fixing
                  a leaky faucet, repairing a broken electrical outlet, or
                  renovating a room, our skilled professionals are equipped to
                  handle it all.
                </p>
              </>
            )}
          </div>
          <div className="rounded border-b">
            <button
              onClick={() => toggleAccordion(2)}
              className="flex items-center justify-between w-full p-8"
            >
              <h1 className="font-semibold">
                Are your repair services guaranteed?
              </h1>

              <span className="p-[2px] bg-primary rounded-full">
                {isOpen === 2 ? (
                  <HiOutlineMinus className="w-6 h-6" />
                ) : (
                  <GoPlus className="w-6 h-6" />
                )}
              </span>
            </button>

            {isOpen === 2 && (
              <>
                <hr className="border-primary" />

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Yes, all our repair services come with a satisfaction
                  guarantee. If you're not completely satisfied with the quality
                  of our workmanship, simply let us know and we'll make it
                  right. Your satisfaction is our top priority.
                </p>
              </>
            )}
          </div>
          <div className="rounded border-b">
            <button
              onClick={() => toggleAccordion(3)}
              className="flex items-center justify-between w-full p-8"
            >
              <h1 className="font-semibold">
                How long will it take to complete a repair job?
              </h1>

              <span className="p-[2px] bg-primary rounded-full">
                {isOpen === 3 ? (
                  <HiOutlineMinus className="w-6 h-6" />
                ) : (
                  <GoPlus className="w-6 h-6" />
                )}
              </span>
            </button>

            {isOpen === 3 && (
              <>
                <hr className="border-primary" />

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  The duration of a repair job depends on various factors such
                  as the complexity of the issue and the availability of
                  materials. Our team will provide you with an estimated
                  timeframe for completion once we assess the scope of the work
                  involved.
                </p>
              </>
            )}
          </div>

          <div className="rounded border-b">
            <button
              onClick={() => toggleAccordion(4)}
              className="flex items-center justify-between w-full p-8"
            >
              <h1 className="font-semibold">
                Do you offer emergency repair services?
              </h1>

              <span className="p-[2px] bg-primary rounded-full">
                {isOpen === 4 ? (
                  <HiOutlineMinus className="w-6 h-6" />
                ) : (
                  <GoPlus className="w-6 h-6" />
                )}
              </span>
            </button>

            {isOpen === 4 && (
              <>
                <hr className="border-primary" />

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Yes, we understand that some repair issues require immediate
                  attention. That's why we offer emergency repair services to
                  address urgent situations such as burst pipes, electrical
                  faults, or other critical issues. Simply contact us, and we'll
                  dispatch our team to assist you as soon as possible.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
