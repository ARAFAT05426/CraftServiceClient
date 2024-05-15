import { Fade, Flip } from "react-awesome-reveal";
import useCallContext from "../Hooks/useCallContext";
import useRefetch from "../Hooks/useRefetch";
import { Helmet } from "react-helmet-async";
import Loader from "../Root/Loader/Loader";

const BookedServices = () => {
  const { user } = useCallContext();
  const { data, loading } = useRefetch(`/bookings/${user?.email}`);
  if(loading){
    return <Loader />
  }
  return (
    <section className="pt-20 px-5 lg:px-32">
      <Helmet>
        <title>KraftFix | BookedServices</title>
      </Helmet>
      <div>
        {data?.length === 0 ? (
          <Fade direction="down">
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
              <h1 className="text-center text-7xl font-semibold">
                NO BOOKED <span className="text-primary">SERVICES</span>
              </h1>
            </div>
          </Fade>
        ) : (
          <>
            <Fade direction="down">
              <h1 className="text-center text-6xl font-semibold">
                YOUR BOOKED <span className="text-primary">SERVICES</span>
              </h1>
            </Fade>
            <div className="pb-20 pt-5">
              <Flip triggerOnce direction="horizontal" delay={800}>
                <div
                  style={{ scrollbarWidth: "thin" }}
                  className="overflow-x-auto bg-base-200 p-7 rounded-md"
                >
                  <table className="border-collapse w-full px-7 py-5  rounded">
                    <thead className="font-bold border-b border-b-base-300">
                      <tr className="text-left w-full">
                        <th className="px-4 py-2 text-base-content">#</th>
                        <th className="px-4 py-2 text-base-content">
                          Service ID
                        </th>
                        <th className="px-4 py-2 text-base-content">
                          Service Name
                        </th>
                        <th className="px-4 py-2 text-base-content">
                          Service Provider
                        </th>
                        <th className="px-4 py-2 text-base-content">
                          Service Price
                        </th>
                        <th className="px-4 py-2 text-base-content">
                          Service Status
                        </th>
                        <th className="px-4 py-2 text-base-content">
                          Deadline
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-medium">
                      {data?.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-200 border-b border-b-base-300 px-5 transition-colors duration-300"
                        >
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="px-4 py-2">{item?._id}</td>
                          <td className="px-4 py-2">{item?.serviceName}</td>
                          <td className="px-4 py-2">{item?.providerName}</td>
                          <td className="px-4 py-2">$ {item?.price}</td>
                          <td className={`px-4 py-2`}>
                            <p
                              className={`px-5 py-2 w-24 rounded-full text-center ${
                                item?.status === "pending"
                                  ? "bg-yellow-400/80"
                                  : item?.status === "working"
                                  ? "bg-blue-400/80"
                                  : "bg-green-400/80"
                              }`}
                            >
                              {item?.status}
                            </p>
                          </td>
                          <td className="px-4 py-2">
                            {new Date(item?.serviceDate).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Flip>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BookedServices;
