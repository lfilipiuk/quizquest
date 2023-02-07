import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick: () => void;
  children: string;
  link?: string;
}

const LinkButton: FC<ButtonProps> = ({ children, onClick, link }: ButtonProps) => {
  const style =
    "bg-blue-600 w-52 mx-auto p-4 rounded-lg text-white hover:bg-blue-700 transition-all duration-200 text-xl text-center";

  if (link)
    return (
      <Link onClick={onClick} to={link} className={style}>
        {children}
      </Link>
    )

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default LinkButton;
