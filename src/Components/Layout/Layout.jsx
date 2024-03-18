import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import classes from './Layout.module.css'
import { DarkContext } from "../../Context/Context";
import Footer from "../Footer/Footer";

export default function Layout() {

    const { dark } = useContext(DarkContext);

    return (
        <>
            <div className={(dark ? classes.bg_dark : classes.bg_light)}>
                <Navbar />
                <div className={"container-fluid " + (dark ? "text-secondaryColor" : "text-primaryColor")}>
                    <div className="row">
                        <div className="d-none d-xl-block col-xl-3 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-12 col-xl-9 pe-xl-5">
                            <Outlet />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}