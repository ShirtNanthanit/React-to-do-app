import { BeatLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <BeatLoader
      size={20}
      loading={loading}
      cssOverride={{ margin: "48px", textAlign: "center" }}
    />
  );
};

export default Spinner;
