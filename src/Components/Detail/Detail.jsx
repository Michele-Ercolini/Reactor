import { useContext } from "react";
import { DarkContext, UserContext } from "../../Contexts/Contexts";
import classes from './Detail.module.css'
import Reviews from "../Reviews/Reviews";
import LiveChat from "../LiveChat/LiveChat";
import { Link } from "react-router-dom";
import AchievementCard from "../AchievementCard/AchievementCard";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCards } from 'swiper/modules';


export default function Detail({ game, achievements }) {

    const { dark } = useContext(DarkContext);
    const { profile } = useContext(UserContext);

    return (
        <>

            <div className="container-fluid" style={
                {
                    background: `linear-gradient(transparent 80%, ${(dark ? "rgba(15, 15, 15, 1)" : "rgba(247, 247, 247, 1)")}), url(${game.background_image}) no-repeat center center/cover fixed`,
                    minHeight: "calc(100vh - 80px)",
                    width: "100%",
                    transition: "0.5s",
                    padding: "0",
                }
            }>
                <h1 className={classes.title + " text-center display-1 " + (dark ? "text-secondaryColor" : "text-primaryColor")}>{game.name}</h1>
            </div >

            {/* Bento Design */}
            <div className={"container-fluid pt-5 " + (dark ? "dark" : "light")}>
                <div className="row mx-0 ">
                    <div className="col-12 col-xl-2">
                        {/* Bento 1 */}
                        <div className={classes.height21 + " d-flex flex-column justify-content-center align-items-center mb-3 " + classes.shadow_custom}>
                            <h2 className="text-center display-2">{game.metacritic}</h2>
                            <h3 className="text-center">METACRITIC</h3>
                        </div>
                        {/* Bento 2 */}
                        <div className={classes.height44 + " d-flex flex-column justify-content-center align-items-center mb-3 " + classes.shadow_custom}>
                            <h2 className="text-center my-3">Genres:</h2>
                            <div className={classes.height42 + " d-flex flex-column justify-content-around"}>
                                {game.genres.slice(0, 5).map(genre => {
                                    return (
                                        <Link key={genre.id} className={`btn mb-3 fs-5 ${classes.btn_outline}` + (dark ? ' text-secondaryColor' : ' text-primaryColor')} to={`/genre/${genre.slug}`}>{genre.name}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        {/* Bento 3 */}
                        <div className={classes.height21 + " d-flex flex-column justify-content-center align-items-center mb-3 " + classes.shadow_custom}>
                            <h2 className="text-center">Released</h2>
                            <h3 className="text-center">{game.released}</h3>
                        </div>
                    </div>
                    <div className="col-12 col-xl-8">
                        {/* Bento 4 */}
                        <div className={classes.height55 + " mb-3 " + classes.shadow_custom}>
                            <div className={classes.description_shadow}>
                                <div className={classes.description}>
                                    <h2 className="text-center my-3">DESCRIPTION</h2>
                                    <p className=" ">{game.description_raw}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-8">
                                {/* Bento 5 */}
                                {profile && <Reviews game={game} />}
                            </div>
                            <div className="col-12 col-xl-4">
                                {/* Bento 6 */}
                                <div className={classes.height32 + " d-flex flex-column justify-content-center align-items-center mb-3 " + classes.shadow_custom}>
                                    <h2 className="text-center my-3">Buy here:</h2>
                                    <div className={classes.height40 + " d-flex flex-column justify-content-around"}>
                                        {game.stores.slice(0, 4).map(store => {
                                            return (
                                                <a key={store.id} href={`https://${store.store.domain}`} target="blank" className={`btn mb-3 fs-5  ${classes.btn_outline} ` + (dark ? 'text-secondaryColor' : 'text-primaryColor')}>{store.store.name}</a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2">
                        {/* Bento 7 */}
                        <div className={classes.height43 + " d-flex flex-column justify-content-center align-items-center mb-3 " + classes.shadow_custom}>
                            <h2 className="text-center my-3">Platforms:</h2>
                            <div className={classes.height42 + " d-flex flex-column justify-content-around"}>
                                {game.platforms.slice(0, 5).map(platform => {
                                    return (
                                        <Link key={platform.platform.id} className={`btn mb-3 fs-5 ${classes.btn_outline}` + (dark ? ' text-secondaryColor' : ' text-primaryColor')} to={`/platform/${platform.platform.id}`}>{platform.platform.name}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        {/* Bento 8 */}
                        {profile && <LiveChat game={game} />}
                    </div>
                </div>
            </div>

            {/* Quarta row */}
            <div className="container-fluid pt-5" style={
                {
                    background: `linear-gradient(${(dark ? "rgba(15, 15, 15, 1)" : "rgba(247, 247, 247, 1)")} 10%, transparent 50%) , url(${game.background_image}) no-repeat center center/cover fixed`,
                    minHeight: "140vh",
                    width: "100%",
                    transition: "0.5s",

                }
            }>
                {achievements && achievements.length > 0 &&
                    <div className="row justify-content-center mx-5">
                        <div className="col-12 col-xxl-7">
                            <h2 className={"text-center " + (dark ? ' text-secondaryColor' : ' text-primaryColor')}>Achievements</h2>

                            {/* Swiper */}

                            <Swiper
                                // install Swiper modules
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className={classes.card + " Swiper2"}
                            >
                                {achievements && achievements.map(achievement => {
                                    return (
                                        <SwiperSlide className={classes.card} key={game.id}>
                                            <AchievementCard achievement={achievement} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>

                    </div>
                }
            </div >

        </>
    )
}
