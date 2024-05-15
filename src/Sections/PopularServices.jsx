import { Fade, Flip } from "react-awesome-reveal";
import ServiceCard from "../CARD/ServiceCard";
import useRefetch from "../Hooks/useRefetch";

const PopularServices = () => {
  const { data } = useRefetch("/services");
  return (
    <section className="py-10">
      <Fade direction="down" duration={900}>
        <h1 className="text-5xl font-bold text-center">
          SERVICES & <span className="text-primary">REPAIR</span>
        </h1>
        <div className="flex items-center justify-center">
          <hr className="border-primary border-b-[1.5px] rounded-3xl w-1/4" />
          <p className="text-center px-5">
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </p>
          <hr className="border-primary border-b-[1px] rounded-3xl w-1/4" />
        </div>
      </Fade>
      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-32 pt-10 gap-7">
        {
            data?.map((item, inx) => <Flip direction="horizontal" key={inx}><ServiceCard  data={item} /></Flip>)
        }
      </div>
    </section>
  );
};

export default PopularServices;
