import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className={''}>
                <div className={''}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}