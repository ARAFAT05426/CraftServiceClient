import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Loader from "../Root/Loader/Loader";
import { useEffect, useState } from "react";
import useRefetch from "../Hooks/useRefetch";
import ServiceCard from "../CARD/ServiceCard";
import { Fade, Flip } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const Services = () => {
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");  
  const { data: servicesData, loading: servicesLoading } = useRefetch(`/allServices?size=${itemsPerPage}&skip=${currentPage}&search=${searchText}`);
    const { data: totalLengthData, loading: totalLengthLoading } = useRefetch(`/servicesTotalLength?search=${searchText}`);
  useEffect(() => {
    if (totalLengthData && totalLengthData.totalLength) {
      setTotalPages(Math.ceil(totalLengthData.totalLength / itemsPerPage));
    }
  }, [totalLengthData, itemsPerPage]);
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.search.value);
  };
  const pages = [...Array(totalPages).keys()].map(
    (pageNumber) => pageNumber + 1
  );
  if (servicesLoading || totalLengthLoading) {
    return <Loader />;
  }
  return (
    <section className="pt-20 px-5 lg:px-32">
      <Helmet>
        <title>KraftFix | Services</title>
      </Helmet>
      <div className="flex items-center justify-center pt-7">
        <div className="flex items-center border rounded-md w-1/2 lg:w-1/4">
          <form id="search" className="grow" onSubmit={handleSearch}>
            <input
              className="px-5 py-3 border-none focus-within:outline-none w-full"
              name="search"
              type="text"
              placeholder="Search By Name..."
            />
          </form>
          <button
            form="search"
            className="px-5 py-3 bg-primary font-bold text-lg rounded-e-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {servicesData?.services?.map((item, inx) => (
          <Flip direction="horizontal" key={inx}><ServiceCard  data={item} /></Flip>
        ))}
      </div>
      <div className="flex items-center justify-center py-10">
        <Fade direction="up" cascade duration={500} triggerOnce className="flex">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePagination(currentPage - 1)}
            className={`flex ${
              currentPage === 1 && "cursor-not-allowed"
            } items-center px-4 font-semibold py-2 mx-1 hover:text-white bg-base-300 rounded-md hover:bg-blue-600`}
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePagination(page)}
              className={`items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 border-b-4 transform bg-base-300 hover:bg-blue-600 hover:text-white rounded-md ${
                page === currentPage
                  ? "font-bold border-blue-600 cursor-not-allowed"
                  : "border-transparent"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePagination(currentPage + 1)}
            className={`flex items-center gap-1 font-semibold px-4 py-2 mx-1 ${
              currentPage == totalPages ? "cursor-not-allowed" : "cursor-pointer"
            } text-gray-700 transition-colors duration-300 transform bg-base-300 hover:bg-blue-600 hover:text-white rounded-md`}
          >
            Next
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </Fade>
      </div>
    </section>
  );
};

export default Services;
