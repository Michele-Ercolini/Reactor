import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import classes from './Layout.module.css'
import { DarkContext } from "../../Contexts/Contexts";
import Footer from "../Footer/Footer";

export default function Layout() {

    const { dark } = useContext(DarkContext);

    return (
        <>
            <div className={(dark ? classes.bg_dark : classes.bg_light)}>
                <Navbar />
                <div className={"container-fluid " + (dark ? "text-secondaryColor" : "text-primaryColor")}>
                    <div className="row">
                        <div className="d-none d-xxl-block col-xxl-2 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-12 col-xxl-10 px-xxl-5 pt-xxl-3">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}