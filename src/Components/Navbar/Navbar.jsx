import { useContext, useRef } from "react"
import { Link } from "react-router-dom";
import routes from "../../routes";
import classes from './Navbar.module.css';
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa"
import { RiShoppingCartLine } from "react-icons/ri";
import Searchbar from "../Searchbar/Searchbar";
import Logo from './../../../public/media/color_logo_no_background.png';
import DarkButton from "../DarkButton/DarkButton";
import { DarkContext } from "../../Context/Context";

export default function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(`${classes.responsive_nav}`);
    }

    const { dark } = useContext(DarkContext);

    return (
        <header className="sticky-top">
            <Link className="navbar-brand ms-5" to={routes.home}><img src={Logo} className={classes.navLogo + " img-fluid"} alt="Logo" /></Link>
            <div className="d-flex align-items-center">
                <nav ref={navRef}>
                    <Searchbar />
                    <DarkButton />
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-xl-3">
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaRegUserCircle size="2rem" color="var(--accent2Color)" />
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item text-secondaryColor">Accedi</Link></li>
                                <li><Link className="dropdown-item text-secondaryColor">Registrati</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <Link>
                        <RiShoppingCartLine size="1.5rem" color="var(--accent2Color)" />
                    </Link>
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