import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const BackHomeButton = () => {
  return (
    <Link
      to={"/home"}
      className="bg-gray-200 rounded-full p-2 flex items-center justify-center gap-2 w-40 top-10 absolute left-10"
    >
        <HiArrowLeft className={"text-slate"} />
      Back to home
    </Link>
  );
};

export default BackHomeButton;