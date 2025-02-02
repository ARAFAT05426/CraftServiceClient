import useCallContext from "../Hooks/useCallContext";
import useRefetch from "../Hooks/useRefetch";
import Loader from "../Root/Loader/Loader";
import { FiTrash2 } from "react-icons/fi";
import UpdateModal from "../CARD/UpdateModal";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Fade, Flip } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useCallContext();
  const { data, loading, refetch } = useRefetch(`/service/${user?.email}`);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to delete this service. This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/services/${id}`);
        refetch();
        console.log(res.data);
        Swal.fire(
          "Deleted!",
          "The service has been deleted successfully.",
          "success"
        );
      }
    } catch (err) {
      Swal.fire(
        "Error!",
        "Failed to delete the service. Please try again later.",
        "error"
      );
      console.log(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="pt-16 min-h-screen">
      <Helmet>
        <title>KraftFix | MannageServices</title>
      </Helmet>
      <div className="px-3 lg:px-32">
        <Fade direction="up" duration={600} className="pb-5">
          <h1 className="text-primary text-xl font-bold flex items-center gap-2">
            Added Services
            <span className="px-5 py-1 text-base-100 text-sm bg-blue-400 rounded-full">
              {data.length}
            </span>
          </h1>
        </Fade>
        <div>
          <Flip triggerOnce direction="horizontal" delay={800}>
            <div
              style={{ scrollbarWidth: "thin" }}
              className="overflow-x-auto no-scrollbar bg-base-200 p-7 rounded-md mt-10 mb-20 min-h-screen flex flex-col justify-center"
            >
              {data.length === 0 ? (
                <Fade direction="down" delay={1500}>
                  <p className="text-center text-gray-500 dark:text-gray-300">
                    No services added yet.
                  </p>
                </Fade>
              ) : (
                <Fade triggerOnce direction="down" delay={1500}>
                  <table className="border-collapse w-full px-7 py-5  rounded">
                    <thead className="font-bold border-b border-b-base-300">
                      <tr className="text-left w-full">
                        <th className="px-4 py-2 text-base-content ">#</th>
                        <th className="px-4 py-2 text-base-content hidden lg:flex">
                          Service ID
                        </th>
                        <th className="px-4 py-2 text-base-content ">
                          Service Name
                        </th>
                        <th className="px-4 py-2 text-base-content ">
                          Service Price
                        </th>
                        <th className="px-4 py-2 text-base-content hidden lg:flex">
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
                          <td className="px-4 py-2 hidden lg:flex">{item?._id}</td>
                          <td className="px-4 py-2">{item?.serviceName}</td>
                          <td className="px-4 py-2">$ {item?.price}</td>
                          <td className="px-4 py-2 hidden lg:flex">{item?.serviceArea}</td>
                          <td className="px-4 py-2 relative">
                            <UpdateModal id={item?._id} refetch={refetch} />
                          </td>
                          <td className="px-4 py-2 mx-auto">
                            <button
                              onClick={() => handleDelete(item?._id)}
                              className="p-1 bg-red-500 rounded-full transition-colors duration-300 hover:bg-red-600"
                            >
                              <FiTrash2 className="text-xl text-base-100" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Fade>
              )}
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default ManageService;
