import classes from "./Sidebar.module.css"
import useFetch from "../../hooks/useFetch.js"
import ListGenres from "../ListGenres/ListGenres.jsx";
import ListPlatforms from "../ListPlatforms/ListPlatforms.jsx";
import { useContext, useState } from "react";
import { DarkContext } from "../../Contexts/Contexts";
import SwitchFilter from "../SwitchFilter/SwitchFilter.jsx";
export default function Sidebar() {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}&page_size=18&ordering=name`);

    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=12`);

    const { dark } = useContext(DarkContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <aside className={classes.wrapper + (dark ? ' dark' : ' light')}>
            <div className="">
                <div className={classes.titleHeight + " d-flex justify-content-center align-items-center"}>
                    <h5 className={!isChecked ? classes.title : classes.subtitle}>Genres</h5>
                    <span className="mx-3" onClick={handleChecked}>
                        <SwitchFilter />
                    </span>
                    <h5 className={!isChecked ? classes.subtitle : classes.title}>Platforms</h5>
                </div>
                {!isChecked ?
                    <ListGenres genres={genres} />
                    :
                    <ListPlatforms platforms={platforms} />
                }
            </div>
        </aside>
    )
}


