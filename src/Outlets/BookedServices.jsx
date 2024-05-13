import { Fade, Flip } from "react-awesome-reveal";
import useCallContext from "../Hooks/useCallContext";
import useRefetch from "../Hooks/useRefetch";

const BookedServices = () => {
    const {user} = useCallContext()
  const { data} = useRefetch(`/bookings/${user?.email}`);
    console.log(data);
    return (
        <section className="pt-20">
            <h1>i am Booking {data.length} </h1>
            <div>
            <Flip direction="horizontal" delay={800}>
            <div
              style={{ scrollbarWidth: "none" }}
              className="overflow-x-auto no-scrollbar bg-base-200 p-7 rounded-md"
            >
              <Fade direction="down" delay={1500}>
                <table className="border-collapse w-full px-7 py-5  rounded">
                  <thead className="font-bold border-b border-b-base-300">
                    <tr className="text-left w-full">
                      <th className="px-4 py-2 text-base-content ">#</th>
                      <th className="px-4 py-2 text-base-content ">
                        Service ID
                      </th>
                      <th className="px-4 py-2 text-base-content ">
                        Service Name
                      </th>
                      <th className="px-4 py-2 text-base-content ">
                        Service Price
                      </th>
                      <th className="px-4 py-2 text-base-content">
                        Service Location
                      </th>
                      <th className="px-4 py-2 text-base-content">Actions</th>
                      <th className="px-4 py-2 text-base-content"></th>
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
                        <td className="px-4 py-2">$ {item?.price}</td>
                        <td className="px-4 py-2">{item?.serviceArea}</td>
                        <td className="px-4 py-2">
                        </td>
                        <td className="px-4 py-2">
                          <button
                            className="p-1 bg-red-500 rounded-full transition-colors duration-300 hover:bg-red-600"
                          >
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Fade>
            </div>
          </Flip>
            </div>
        </section>
    );
};

export default BookedServices;