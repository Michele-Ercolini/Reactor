import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ListGames from "../../Components/ListGames/ListGames";

export default function GenreView() {

    const games = useLoaderData();
    const slug = useParams().slug;
    return (
        <>
            <Header title={`Genere: ${slug == 'role-playing-games-rpg' ? 'RPG' : slug.slice(0, 1).toUpperCase() + slug.slice(1)}`}></Header>
            <ListGames games={games} />
        </>
    )
}

export async function gamesByGenreLoader({ params }) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}