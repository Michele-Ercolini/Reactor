import { Link } from "react-router-dom";
import classes from "./GenreLink.module.css"

export default function GenreLink({ genre }) {
    return (
        <>
            
            <Link className={classes.sidebar_item} key={genre.id} to={`/genre/${genre.slug}`}>
            {/* <img className={classes.img_custom} src={genre.image_background} alt="" /> */}
            {genre.name}
            </Link>
        </>
    )
}