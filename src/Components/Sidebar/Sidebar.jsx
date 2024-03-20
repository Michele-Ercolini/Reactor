import classes from "./Sidebar.module.css"
import useFetch from "../../hooks/useFetch.js"
import ListGenres from "../ListGenres/ListGenres.jsx";
import ListPlatforms from "../ListPlatforms/ListPlatforms.jsx";
import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";
export default function Sidebar() {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);

    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=21`);

    const { dark } = useContext(DarkContext);

    return (
        <aside className={classes.wrapper + (dark ? ' dark' : ' light')}>
            <div className="ms-3 my-3">
                <h2 className="mt-3 mb-4 text-center">Generi</h2>
                <ListGenres genres={genres} />
                {/* <h2 className={classes.sidebar_title}>Piattaforme</h2>
                <ListPlatforms platforms={platforms} /> */}
            </div>
        </aside>
    )
}


