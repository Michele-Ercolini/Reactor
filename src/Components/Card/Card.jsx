import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./Card.module.css"
import { DarkContext } from "../../Contexts/Contexts";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function Card({ game }) {
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

    const [isHoveringButton, setIsHoveringButton] = useState(false);

    const handleButtonHover = () => {
        setIsHoveringButton(true);
    };

    const handleButtonLeave = () => {
        setIsHoveringButton(false);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            //add to preferiti
        }
    }

    return (
        <Link to={!isHoveringButton && `/game/${game.id}`}>
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
                    <div className={classes.card_section}>
                        <h5 className={classes.card_title}>{game.name}</h5>
                        {game.genres.slice(0,4).map(genre => {
                            return (
                                <Link className={"btn mx-1 " + (classes.btn_outline)} to={`/genre/${genre.slug}`}>{genre.name}</Link>
                            )
                        })}
                    </div>
                    <button className={classes.btn}
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonLeave}
                        onClick={handleChecked}
                    >
                        {isChecked &&
                            <GoHeartFill color="red" size="3rem" />
                            ||
                            <GoHeart color="var(--secondaryColor)" size="2rem" />
                        }
                    </button>
                </div>
            </div>
        </Link>
    )
}