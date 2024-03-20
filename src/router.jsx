import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "./Components/Layout/Layout";
import Homepage, { gamesLoader } from "./views/Homepage/Homepage";
import GenreView, { gamesByGenreLoader } from "./views/GenreView/GenreView";
import GamesView from "./views/GamesView/GamesView";
import GameView from "./views/GameView/GameView";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import Signup from "./views/Auth/Signup/Signup";
import Login from "./views/Auth/Login/Login";
import Profile from "./views/Auth/Profile/Profile";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
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
                element: <GenreView />,
                loader: gamesByGenreLoader
            }
        ]
    },
    {
        path: routes.auth,
        element: <AuthLayout />,
        children: [
            {
                path: routes.signup,
                element: <Signup />
            },
            {
                path: routes.login,
                element: <Login />
            },
            {
                path: routes.profile,
                element: <Profile/>
            }
        ]
    }
])

export default router;