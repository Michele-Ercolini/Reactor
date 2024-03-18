import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SwiperHome from "../../Components/SwiperHome/SwiperHome";
import routes from "../../routes";
import classes from "./Homepage.module.css"
export default function Homepage() {

    const games = useLoaderData();
    return (
        <>
            <Header />
            <SwiperHome games={games} />
            <div className="d-flex justify-content-center justify-content-md-end me-md-5 mb-3">
                <Link to={routes.games} className={classes.fancy}>
                    <span className={classes.top_key}></span>
                    <span className={classes.text}>Vedi tutti i giochi</span>
                    <span className={classes.bottom_key_1}></span>
                    <span className={classes.bottom_key_2}></span>
                </Link>
            </div>
        </>
    )
}

export async function gamesLoader() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-09-01,2024-03-10`);
    const json = await promise.json();
    return json.results;
}