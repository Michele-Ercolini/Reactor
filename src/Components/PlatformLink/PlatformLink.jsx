import { Link } from "react-router-dom";
import classes from './PlatformLink.module.css'

export default function PlatformLink({platform}){
    return(
        <Link className={classes.sidebar_item2} key={platform.id}>{platform.name}</Link>
    )
}