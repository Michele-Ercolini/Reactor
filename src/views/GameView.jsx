import { useLoaderData, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "../Components/Navbar/Navbar";
import Detail from "../Components/Detail/Detail";

export default function GameView() {

    const game = useLoaderData();
    const { id } = useParams();

    const API_KEY = import.meta.env.VITE_API_KEY;
    const achievements = useFetch(`https://api.rawg.io/api/games/${id}/achievements?key=${API_KEY}`);

    console.log(achievements);
    return (
        <>
            <Navbar />
            <Detail game={game} achievements={achievements && achievements.results}/>
        </>
    )
}

export async function GameLoader({ params }) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`);
    const json = await promise.json();
    return json;
}