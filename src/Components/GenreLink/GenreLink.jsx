import { Link } from "react-router-dom";
import classes from "./GenreLink.module.css"
import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";

export default function GenreLink({ genre }) {

    const { dark } = useContext(DarkContext);
    return (
        <>
            <Link className={classes.sidebar_item + (dark ? ' text-secondaryColor' : ' text-primaryColor')} key={genre.id} to={`/genre/${genre.slug}`}>
                <img className={classes.img_custom + " mb-1"} src={genre.image_background} alt="" />
                {genre.name == 'Massively Multiplayer' ? 'Multiplayer' : genre.name}
            </Link>
        </>
    )
}