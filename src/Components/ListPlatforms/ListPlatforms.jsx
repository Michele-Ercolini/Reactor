import PlatformLink from "../PlatformLink/PlatformLink"
import classes from '../ListGenres/ListGenres.module.css';

export default function ListPlatforms({ platforms }) {
    return (
        <ul className={classes.sidebar_custom}>
            {platforms && platforms.results.map(platform => {
                return (
                    <PlatformLink key={platform.id} platform={platform} />
                )
            })}
            <span></span>
        </ul>
    )
}