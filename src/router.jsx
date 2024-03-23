import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "./Components/Layout/Layout";
import Homepage, { gamesLoader } from "./views/Homepage";
import GenreView, { gamesByGenreLoader } from "./views/GenreView";
import GamesView from "./views/GamesView";
import GameView, { GameLoader } from "./views/GameView";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import SignupView from "./views/Auth/SignupView";
import LoginView from "./views/Auth/LoginView";
import ProfileView from "./views/Auth/ProfileView";
import SettingsView from "./views/Auth/SettingsView";
import PlatformView, { gamesByPlatformLoader } from "./views/PlatformView";

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
                element: <GameView />,
                loader: GameLoader
            },
            {
                path: routes.genre,
                element: <GenreView />,
                loader: gamesByGenreLoader
            },
            {
                path: routes.platform,
                element: <PlatformView />,
                loader: gamesByPlatformLoader
            }
        ]
    },
    {
        path: routes.auth,
        element: <AuthLayout />,
        children: [
            {
                path: routes.signup,
                element: <SignupView />
            },
            {
                path: routes.login,
                element: <LoginView />
            },
            {
                path: routes.profile,
                element: <ProfileView />
            },
            {
                path: routes.settings,
                element: <SettingsView />
            }
        ]
    }
])

export default router;