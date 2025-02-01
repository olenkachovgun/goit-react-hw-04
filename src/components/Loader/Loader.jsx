import { Hourglass } from "react-loader-spinner";

const Loader = ({ visible }) => {
  return (
    <Hourglass
      visible={visible}
      height="50"
      width="50"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />
  );
};

export default Loader;
