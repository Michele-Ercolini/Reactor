import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import classes from './AuthLayout.module.css'
import { DarkContext } from "../../Contexts/Contexts";


export default function AuthLayout() {

    const { dark } = useContext(DarkContext);

    return (
        <>
            <div className={(dark ? classes.bg_dark : classes.bg_light)}>
                <Navbar />
                <div className={"container-fluid " + (dark ? "text-secondaryColor" : "text-primaryColor")}>
                    <div className={`row justify-content-center align-items-center ${classes.height100}`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}