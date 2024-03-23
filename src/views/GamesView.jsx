import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import ListGames from "../Components/ListGames/ListGames";

export default function GamesView(){
    const games = useLoaderData();
    return(
        <>
            <Header title='Tutti i nostri giochi' subtitle="Lorem"/>
            <ListGames games={games}/>
        </>
    )
}
