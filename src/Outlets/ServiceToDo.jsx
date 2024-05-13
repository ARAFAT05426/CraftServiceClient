import useCallContext from "../Hooks/useCallContext";
import useRefetch from "../Hooks/useRefetch";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Fade, Flip } from "react-awesome-reveal";

const ServiceToDo = () => {
  const { user } = useCallContext();
  const { data, refetch } = useRefetch(`/servicesToDo/${user?.email}`);
  const axiosSecure = useAxiosSecure();
  const handleStatus = async (e, id) => {
    const selectedSort = e.target.value.toLowerCase();
    try {
      const res = await axiosSecure.patch(`/bookings?id=${id}`, {
        stat: selectedSort,
      });
      console.log(res.data);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="pt-20 px-3 lg:px-32">
      <Fade direction="up" duration={600}>
        <h1 className="font-bold text-6xl text-center">
          Clients Are <span className="text-primary">Waiting</span>
        </h1>
      </Fade>
      <div className="pt-10">
        <Flip direction="horizontal" delay={800}>
          <div
            style={{ scrollbarWidth: "2px" }}
            className="overflow-x-auto bg-base-200 p-7 rounded-md"
          >
            <Fade direction="down" delay={1500}>
              <table className="border-collapse w-full px-7 py-5 rounded">
                <thead className="font-bold border-b border-base-300">
                  <tr className="text-left  w-full">
                    <Fade direction="down">
                      <th className="px-4 py-2 text-base-content">#</th>
                    </Fade>
                    <th className="px-4 py-2 text-base-content">Title</th>
                    <th className="px-4 py-2 text-base-content">
                      Customer Name
                    </th>
                    <th className="px-4 py-2 text-base-content">
                      Customer Email
                    </th>
                    <th className="px-4 py-2 text-base-content">Net Profit</th>
                    <th className="px-4 py-2 text-base-content">
                      Service Date
                    </th>
                    <th className="px-4 py-2 text-base-content">Status</th>
                  </tr>
                </thead>
                <tbody className="font-medium">
                  {data?.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-200 border-b border-b-base-300 px-5 transition-colors duration-300"
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item?.serviceName}</td>
                      <td className="px-4 py-2">{item?.userName}</td>
                      <td className="px-4 py-2">{item?.userEmail}</td>
                      <td className="px-4 py-2">$ {item?.price}</td>
                      <td className="px-4 py-2">
                        {new Date(item?.serviceDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">
                        <div
                          className={`flex items-center gap-1 w-fit rounded-[4rem] ${
                            item?.status === "pending"
                              ? "bg-yellow-400/80"
                              : item?.status === "working"
                              ? "bg-blue-400/80"
                              : "bg-green-400/80"
                          }`}
                        >
                          <select
                            onChange={(e) => {
                              handleStatus(e, item?._id);
                            }}
                            className="select select-bordered max-h-2 min-h-10 border-none focus-within:outline-none bg-transparent text-slate-950"
                          >
                            <option disabled>{item?.status}</option>
                            <option>Working</option>
                            <option>Completed</option>
                          </select>
                        </div>
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

export default ServiceToDo;
