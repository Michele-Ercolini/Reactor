import { useContext, useState } from "react"
import { FaRegUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom";
import routes from "../../routes";
import { DarkContext, UserContext } from "../../Contexts/Contexts";
import classes from './DropdownUser.module.css'

export default function DropdownUser({ removeNavbar }) {

    const { dark } = useContext(DarkContext);

    const { profile, signOut } = useContext(UserContext);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        removeNavbar();
    }

    const handleSignOut = ()=>{
        signOut();
        handleDropdown();
    }


    return (
        <div className={classes.dropdown + " ms-lg-5"}>
            <a className={classes.dropbtn} onClick={toggleDropdown}>
                <FaRegUserCircle size="2rem" color="var(--accent2Color)" />
            </a>
            {isDropdownOpen &&
                <div className={classes.dropdown_content}>
                    {!profile ?
                        <>
                            <Link to={routes.login} className={(dark ? " dark" : " light")} onClick={handleDropdown}>Accedi</Link>
                            <Link to={routes.signup} className={(dark ? " dark" : " light")} onClick={handleDropdown}>Registrati</Link>
                        </>
                        :
                        <>
                        <Link to={routes.profile} className={(dark ? " dark" : " light")}>Profile</Link>
                        <Link to={routes.home} className={(dark ? " dark" : " light")} onClick={handleSignOut}>Logout</Link>
                        </>
                    }
                </div>
            }
        </div>
    )
}