import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import ListGames from "../Components/ListGames/ListGames";

export default function SearchView() {

    const location = useLocation();
    const games = location.state && location.state.games ? location.state.games.results : [];

    // Ora puoi utilizzare l'array "games" per visualizzare i risultati della ricerca nella tua vista

    return (
        <>
            <Header title='Results' />
            <ListGames games={games} />
        </>
    );
}
