import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom";
import routes from "../../routes";
import classes from './Navbar.module.css';
import { FaBars, FaTimes } from "react-icons/fa"
import { RiShoppingCartLine } from "react-icons/ri";
import Searchbar from "../Searchbar/Searchbar";
import Logo from './../../../public/media/color_logo_no_background.png';
import DarkButton from "../DarkButton/DarkButton";
import { DarkContext, UserContext } from "../../Contexts/Contexts";
import DropdownUser from "../DropdownUser/DropdownUser"

export default function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(`${classes.responsive_nav}`);
    }

    const removeNavbar = () => {
        navRef.current.classList.remove(`${classes.responsive_nav}`);
    }

    const { dark } = useContext(DarkContext);

    const { profile } = useContext(UserContext);

    return (
        <header className={"sticky-top " + (dark ? "dark" : "light")}>
            <Link className="navbar-brand ms-5" to={routes.home}><img src={Logo} className={classes.navLogo + " img-fluid"} alt="Logo" /></Link>
            <div className="d-flex align-items-center">
                <nav ref={navRef} className={(dark ? "dark" : "light")}>
                    {profile && <h6 className={classes.username}>{profile.username}</h6>}
                    <Searchbar />
                    <DarkButton />
                    <div className="ms-lg-5">
                        <RiShoppingCartLine size="1.5rem" color="var(--accent2Color)" />
                    </div>
                    <DropdownUser removeNavbar={removeNavbar} />
                    <button className={`${classes.nav_btn} ${classes.nav_close_btn}`} onClick={showNavbar}>
                        <FaTimes color={"var(--accent2Color)"} />
                    </button>
                </nav>
                <button className={classes.nav_btn} onClick={showNavbar}>
                    <FaBars color={"var(--accent2Color)"} />
                </button>
            </div>
        </header >
    )
}