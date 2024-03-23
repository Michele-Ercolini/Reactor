import { useLoaderData, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function GameView(){

    const game = useLoaderData();
    console.log(game);
    const {id} = useParams();

    const API_KEY = import.meta.env.VITE_API_KEY;
    const achievement = useFetch(`https://api.rawg.io/api/games/${id}/achievements?key=${API_KEY}`);

    console.log(achievement);
    return(
        <h1>Dettaglio</h1>
    )
}

export async function GameLoader({params}){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`);
    const json = await promise.json();
    return json;
}