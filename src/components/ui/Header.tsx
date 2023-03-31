import {FC} from "react";
import logo from "@/assets/logo.svg";

const Header: FC = () => {

    return (
        <div className={''}>
            <img className={"mx-auto"} src={logo} alt={'quizquest logo'} />
        </div>
    );
}

export default Header;