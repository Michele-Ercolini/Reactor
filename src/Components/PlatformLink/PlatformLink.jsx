import { Link } from "react-router-dom";
import classes from "../GenreLink/GenreLink.module.css"
import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";

export default function PlatformLink({ platform }) {

    const { dark } = useContext(DarkContext);

    return (
        <Link className={classes.sidebar_item + (dark ? ' text-secondaryColor' : ' text-primaryColor')} key={platform.id} to={{pathname: `/platform/${platform.id}`, platform: platform}} >
            <img className={classes.img_custom + " mb-1"} src={platform.image_background} alt="" />
            {platform.name}
        </Link>
    )
}