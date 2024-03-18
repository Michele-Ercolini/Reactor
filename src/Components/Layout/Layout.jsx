import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";

import { DarkContext } from "../../Context/Context";

export default function Layout() {

    const { dark } = useContext(DarkContext);

    return (
        <>
            <Navbar />
            <div className={"container-fluid " + (dark ? "dark" : "light")}>
                <div className="row">
                    <div className="d-none d-xl-block col-xl-3 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-xl-9 pe-xl-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}