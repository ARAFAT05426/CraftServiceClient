import useRefetch from "../Hooks/useRefetch";

const PopularServices = () => {
  const { data } = useRefetch("/services");
  console.log(data);
  return (
    <section className="py-10">
      <div>
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
      </div>
    </section>
  );
};

export default PopularServices;
