import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center ml-6 mr-6 min-w-[640px] min-h-[calc(100vh-(48px+373px))]">
      <Vortex
        visible={true}
        height="350"
        width="350"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["green", "green", "green", "green", "green", "green"]}
      />
    </div>
  );
};

export default Loader;
