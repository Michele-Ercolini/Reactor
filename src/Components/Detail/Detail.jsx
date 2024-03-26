import { useContext } from "react";
import { DarkContext, UserContext } from "../../Contexts/Contexts";
import classes from './Detail.module.css'
import Reviews from "../Reviews/Reviews";
import LiveChat from "../LiveChat/LiveChat";
import { Link } from "react-router-dom";
import AchievementCard from "../AchievementCard/AchievementCard";


export default function Detail({ game, achievements }) {

    const { dark } = useContext(DarkContext);
    const { profile } = useContext(UserContext);

    return (
        <div className={"container-fluid " + (dark ? 'dark' : 'light')}>
            <div className="row ">
                {/* Bento 1 */}
                <div className="col-12 col-md-8 ">
                    <div className="row">
                        <div className={"col-12 my-3 " + classes.height28} >
                            <div className={classes.shadow_custom} style={
                                {
                                    background: `linear-gradient(transparent, rgba(0, 0, 0, 0.6)), url(${game.background_image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '28vh',
                                    margin: '1rem'
                                }
                            }>
                                <div className={classes.height28 + " row align-items-end"}>
                                    <div className="col-12 d-none d-xxl-block">
                                        <div className="d-flex justify-content-xxl-center mb-2">
                                            <h4 className="my-auto">Genres: </h4>
                                            <div className={classes.genres}>
                                                {game.genres.slice(0, 3).map(genre => {
                                                    return (
                                                        <Link key={genre.id} className={`btn mx-1 ${classes.btn_outline}` + (dark ? ' text-secondaryColor' : ' text-primaryColor')} to={`/genre/${genre.slug}`}>{genre.name}</Link>
                                                    )
                                                })}
                                            </div>
                                            <h4 className="my-auto ms-5">Platforms: </h4>
                                            <div className={classes.genres}>
                                                {game.platforms.slice(0, 3).map(platform => {
                                                    return (
                                                        <Link key={platform.platform.id} className={`btn mx-1 ${classes.btn_outline}` + (dark ? ' text-secondaryColor' : ' text-primaryColor')} to={`/platform/${platform.platform.id}`}>{platform.platform.name}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* !Bento 1 */}

                {/* Bento 2 */}
                <div className={"col-12 col-md-4 " + classes.height28}>
                    <div className={classes.description_shadow}>
                        <div className={classes.description}>
                            <h1 className="text-center mt-3">{game.name}</h1>
                            <p className=" ">{game.description_raw}</p>
                        </div>
                    </div>
                </div>
                {/* !Bento 2 */}
            </div>
            {/* Seconda row */}
            <div className={"row "}>
                {/* Bento 3 */}
                {profile &&
                    <div className={"col-12 col-md-4 " + classes.height28}>
                        <div className="row">
                            {profile && <LiveChat game={game} />}
                        </div>
                    </div>
                }
                {/* !Bento 3 */}

                {/* Bento 4 */}
                <div className={(profile ? "col-12 col-md-4 " : "col-12 col-md-8 ") + classes.height28}>
                    <div className={`d-flex flex-column justify-content-between ${classes.inf_section} ${classes.shadow_custom}`}>
                        <div>
                            <h2 className="text-center display-3 mb-0">{game.metacritic}</h2>
                            <h3 className="text-center mb-0">METACRITIC</h3>
                        </div>
                        <p className=" text-end mb-0">Released: {game.released}</p>
                        <div className="d-xxl-flex justify-content-xxl-between">
                            <p className="d-block text-center mb-0">Buy here:</p>
                            <div className="text-center">
                                {game.stores.slice(0, 3).map(store => {
                                    return (
                                        <a key={store.id} href={`https://${store.store.domain}`} target="blank" className={`btn mx-1 ${classes.btn_outline} ` + (dark ? 'text-secondaryColor' : 'text-primaryColor')}>{store.store.name}</a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* !Bento 4 */}
            </div>
            {/* Terza row */}
            <div className="row">
                {/* Bento 5 - Reviews*/}
                {profile && <Reviews game={game} />}
                {/* !Bento 5 */}
            </div>
            {/* !Terza row */}

            {/* Quarta row */}
            <div className="container">
                <div className="row mt-5">
                    <h2 className="text-center mb-5">Achievements</h2>
                    {achievements && achievements.map(achievement => {
                        return (
                            <div key={achievement.id} className="col-12 col-lg-6 col-xl-4 mb-3">
                                <AchievementCard achievement={achievement} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}