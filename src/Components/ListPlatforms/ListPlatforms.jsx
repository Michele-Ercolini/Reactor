import PlatformLink from "../PlatformLink/PlatformLink"
import classes from './ListPlatforms.module.css'

export default function ListPlatforms({platforms}) {
    return (
        <ul className={classes.sidebar_custom2}>
            {platforms && platforms.results.map(platform => {
                return (
                    <PlatformLink key={platform.id} platform={platform}/>
                )
            })}
            <span></span>
        </ul>
    )
}