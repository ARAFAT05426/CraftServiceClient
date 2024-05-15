import { Link } from "react-router-dom";
import { RiHomeOfficeLine } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

const LatestProjects = () => {
  const services = [
    {
      serviceName: "Floor Repair",
      serviceArea: "Living Room",
      price: "500",
      description: "Fixing damaged floorboards and replacing tiles.",
      providerName: "John Smith",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TTWuwpl3D-X9fPZ266l0H2jGLPWZDJFKUfxLuxRYJg&s",
      providerImage: "https://source.unsplash.com/50x50/?portrait,john",
    },
    {
      serviceName: "Roof Rebuild",
      serviceArea: "Entire House",
      price: "5000",
      description: "Complete roof reconstruction using durable materials.",
      providerName: "Emily Brown",
      imageURL:
        "https://s7d2.scene7.com/is/image/farmers/PP_RoofRepair_Header_455x242-1",
      providerImage: "https://source.unsplash.com/50x50/?portrait,emily",
    },
    {
      serviceName: "Gutter Cleanup",
      serviceArea: "Exterior",
      price: "100",
      description:
        "Clearing debris and leaves from gutters for proper drainage.",
      providerName: "Michael Johnson",
      imageURL:
        "https://www.familyhandyman.com/wp-content/uploads/2023/10/FHMVP23_PK_09_28_HowToCleanGutters_YVedit_FT.jpg",
      providerImage: "https://source.unsplash.com/50x50/?portrait,michael",
    },
    {
      serviceName: "Gutter Cleanup",
      serviceArea: "Exterior",
      price: "100",
      description:
        "Clearing debris and leaves from gutters for proper drainage.",
      providerName: "Michael Johnson",
      imageURL: "https://source.unsplash.com/800x600/?gutter-cleanup",
      providerImage: "https://source.unsplash.com/50x50/?portrait,michael",
    },
  ];

  return (
    <section>
      <div className="py-12">
        <div className="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
          <h2 className="flex justify-center font-sans text-4xl lg:text-6xl font-bold leading-none tracking-tight text-center text-gray-900 b-6 md:mx-auto">
            <RiHomeOfficeLine className="mr-2" />
            <p className="relative uppercase">
              Our Latest Home Repair{" "}
              <span className="text-primary">Services</span>{" "}
            </p>
          </h2>
          <Link
            to={"/services"}
            className="mt-3 text-sm font-semibold text-indigo-600 underline"
          >
            View Our Full Range of Services
          </Link>

          <div className="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 md:max-w-none">
            {services.map((service, index) => (
              <Fade
                key={index}
                triggerOnce
                duration={600}
                direction="up"
                cascade
                damping={0.1}
              >
                <div className="max-w-md bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img
                    className="w-full h-56 object-cover"
                    src={service.imageURL}
                    alt={service.serviceName}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.serviceName}
                    </h3>
                    <p className="mt-2 text-gray-600">{service.description.slice(0, 50)}...</p>
                    <div className="flex items-center mt-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={service.providerImage}
                        alt={service.providerName}
                      />
                      <p className="ml-2 text-sm font-semibold text-gray-800">
                        {service.providerName}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
