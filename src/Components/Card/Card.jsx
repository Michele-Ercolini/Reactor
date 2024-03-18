import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./Card.module.css"

export default function Card({ game }) {

    const [hover, setHover] = useState(false);

    const API_KEY = import.meta.env.VITE_API_KEY;

    const video = useFetch(`https://api.rawg.io/api/games/${game.id}/movies?key=${API_KEY}`);

    return (
        <Link to={`/game/${game.id}`}>
            <div className={classes.card}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className={classes.card2}>
                    {
                        video &&
                        (
                            hover ?
                                (
                                    video.count > 0 ? <video className={classes.card_img} src={video.results[0].data.max} autoPlay muted loop /> : <img src={game.background_image} className={classes.card_img} alt="Game's image" />
                                )
                                : <img src={game.background_image} className={classes.card_img} alt="Game's image" />
                        )
                    }
                    <h5 className={classes.card_title}>{game.name}</h5>
                </div>
            </div>
        </Link>
    )
}