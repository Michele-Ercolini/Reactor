import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "./Components/Layout/Layout";
import Homepage, { gamesLoader } from "./views/Homepage/Homepage";
import GenreView, { gamesByGenreLoader } from "./views/GenreView/GenreView";
import GamesView from "./views/GamesView/GamesView";
import GameView from "./views/GameView/GameView";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout/>,
        children: [
            {
                path: routes.home,
                element: <Homepage />,
                loader: gamesLoader
            },
            {
                path: routes.games,
                element: <GamesView />,
                loader: gamesLoader
            },
            {
                path: routes.game,
                element: <GameView />
            },
            {
                path: routes.genre,
                element: <GenreView/>,
                loader: gamesByGenreLoader
            }
        ]
    }
])

export default router;