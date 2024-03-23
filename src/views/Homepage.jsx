import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import SwiperHome from "../Components/SwiperHome/SwiperHome";
import routes from "../routes";
import { useContext } from "react";
import { DarkContext } from "../Contexts/Contexts";
export default function Homepage() {

    const games = useLoaderData();

    const { dark } = useContext(DarkContext);
    
    return (
        <>
            <div className={"body"}>
                <Header />
                <SwiperHome games={games} />
                <div className="d-flex justify-content-center justify-content-md-end me-md-5 my-4">
                    <Link to={routes.games} className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                        <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={"text"}>Vedi tutti i giochi</span>
                        <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export async function gamesLoader() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2024-03-20&page_size=21&ordering=-metacritic`);
    const json = await promise.json();
    return json.results;
}