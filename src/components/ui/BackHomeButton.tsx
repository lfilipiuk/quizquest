import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const BackHomeButton = () => {
  return (
    <Link
      to={"/home"}
      className="bg-gray-200 rounded-full p-2 md:flex hidden items-center justify-center gap-2 w-40 md:top-10 absolute md:left-10 top-2 left-2"
    >
        <HiArrowLeft className={"text-slate"} />
      Back to home
    </Link>
  );
};

export default BackHomeButton;