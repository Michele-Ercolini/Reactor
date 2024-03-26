import classes from './ListGenres.module.css';
import GenreLink from '../GenreLink/GenreLink';

export default function ListGenres({ genres }) {
    return (
        <ul className={classes.sidebar_custom}>
            {genres && genres.results.map(genre => {
                return (
                    <GenreLink key={genre.id} genre={genre} />
                )
            })}
            <span></span>
        </ul>
    )
}