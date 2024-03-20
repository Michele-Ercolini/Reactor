import { useContext, useState } from "react"
import { FaRegUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom";
import routes from "../../routes";
import { DarkContext } from "../../Context/Context";
import classes from './DropdownUser.module.css'

export default function DropdownUser({removeNavbar}) {

    const { dark } = useContext(DarkContext);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
        removeNavbar();
    }

    return (
        <div className={classes.dropdown + " mx-xl-3"}>
            <a className={classes.dropbtn} onClick={toggleDropdown}>
                <FaRegUserCircle size="2rem" color="var(--accent2Color)" />
            </a>
            {isDropdownOpen &&
                <div className={classes.dropdown_content}>
                    <Link to={routes.login} className={(dark ? " dark" : " light")} onClick={handleDropdown}>Accedi</Link>
                    <Link to={routes.signup} className={(dark ? " dark" : " light")} onClick={handleDropdown}>Registrati</Link>
                </div>
            }
        </div>
    )
}