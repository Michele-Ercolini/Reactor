import { FaTimes } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import ListGenres from "../ListGenres/ListGenres";
import ListPlatforms from "../ListPlatforms/ListPlatforms";
import classes from "./Offcanvas.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";

export default function Offcanvas() {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);

    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=21`);

    const { dark } = useContext(DarkContext);

    return (
        <>
            <button className={classes.sign  + (dark ? " bg-primaryColor" : " bg-secondaryColor")} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <IoIosArrowForward color={"var(--accent2Color)"} size="2rem" />
                {/* <div className={classes.text}>Generi</div> Si dovrebbe vedere sull'hover, ma per smartphone/tablet risulta inutile */}
            </button>
            <div className={"offcanvas offcanvas-start " + (dark ? "dark" : "light")} data-bs-scroll="true" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header pb-3 d-flex justify-content-around align-items-center">
                    <h2 className="">Generi</h2>
                    <button className={classes.sign + (dark ? " bg-primaryColor" : " bg-secondaryColor")} type="button" data-bs-dismiss="offcanvas" aria-label="Close" >
                        <IoIosArrowBack color={"var(--accent2Color)"} size="2rem" />
                    </button>
                </div>
                <div className={classes.wrapper}>
                    <ListGenres genres={genres} />
                    {/* <div className="offcanvas-header py-1">
                        <h2 className={classes.sidebar_title}>Piattaforme</h2>
                    </div>
                    <ListPlatforms platforms={platforms} /> */}
                </div>
            </div>
        </>
    )
}