import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import ListGames from "../Components/ListGames/ListGames";
import useFetch from "../hooks/useFetch";

export default function PlatformView() {

    const games = useLoaderData();
    const id = useParams().id;

    /* const API_KEY = import.meta.env.VITE_API_KEY;
    const platform = useFetch(`https://api.rawg.io/api/platforms/${id}?key=${API_KEY}`);

    console.log(platform); */
    
    return (
        <>
            <Header title={`Piattaforma: ${id}`}></Header>
            <ListGames games={games} />
        </>
    )
}

export async function gamesByPlatformLoader({ params }) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&platforms=${params.id}&page_size=21`);
    const json = await promise.json();
    return json.results;
}