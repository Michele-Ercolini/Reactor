import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./CardSwiperHome.module.css"
import { DarkContext } from "../../Contexts/Contexts";

export default function CardSwiperHome({ game }) {

    const { dark } = useContext(DarkContext);

    const [hover, setHover] = useState(false);
    const videoRef = useRef(null);

    const handleHover = () => {
        setHover(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 3; // Imposta il tempo del video a 3 secondi
            videoRef.current.play(); // Avvia la riproduzione del video
        }
    };

    const handleMouseLeave = () => {
        setHover(false);
        if (videoRef.current) {
            videoRef.current.pause(); // Metti in pausa la riproduzione del video
        }
    };

    const API_KEY = import.meta.env.VITE_API_KEY;

    const video = useFetch(`https://api.rawg.io/api/games/${game.id}/movies?key=${API_KEY}`);

    return (
        <Link to={`/game/${game.id}`}>
            <div className={(dark ? classes.card_dark : classes.card_light)}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}>
                <div className={classes.card2}>
                    {
                        video &&
                        (
                            hover ?
                                (
                                    video.count > 0 ? <video ref={videoRef} className={classes.card_img} src={video.results[0].data.max} autoPlay muted loop /> : <img src={game.background_image} className={classes.card_img} alt="Game's image" />
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