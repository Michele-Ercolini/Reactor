import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";
import classes from './Detail.module.css'
import Reviews from "../Reviews/Reviews";


export default function Detail({ game }) {

    const { dark } = useContext(DarkContext);

    return (
        <div className="container-fluid">
            <div className="row ">
                {/* Bento 1 */}
                <div className="col-12 col-md-8 ">
                    <div className="row">
                        <div className={"col-12 my-3 " + classes.height28} >
                            <div style={
                                {
                                    backgroundImage: `url(${game.background_image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '28vh',
                                    margin: '1rem'
                                }
                            }>
                                <h1 className={"text-center" + (dark ? ' text-secondaryColor' : ' text-primaryColor')}>{game.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* !Bento 1 */}

                {/* Bento 2 */}
                <div className={"col-12 col-md-4 " + classes.height28}>
                    <div className="row">
                        <div className={"col-12 bg-danger my-3 " + classes.height56}>
                            <div className={classes.description}>
                                <p className={"lead " + (dark ? 'text-secondaryColor' : 'text-primaryColor')}>{game.description_raw}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* !Bento 2 */}
            </div>
            {/* Seconda row */}
            <div className={"row "}>
                {/* Bento 3 */}
                <div className={"col-12 col-md-4 " + classes.height28}>
                    <div className="row">
                        <div className={"col-12 bg-primary " + classes.height56}>
                        </div>
                    </div>
                </div>
                {/* !Bento 3 */}

                {/* Bento 4 */}
                <div className={"col-12 col-md-4 bg-secondary " + classes.height28}>
                    <div>

                    </div>
                </div>
                {/* !Bento 4 */}
            </div>
            {/* Terza row */}
            <div className="row">
                {/* Bento 5 - Reviews*/}
                <Reviews game={game}/>
                {/* !Bento 5 */}
            </div>
        </div>
    )
}