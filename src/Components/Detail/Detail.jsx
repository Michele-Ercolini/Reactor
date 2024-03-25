import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";
import classes from './Detail.module.css'


export default function Detail({ game }) {

    const { dark } = useContext(DarkContext);

    return (
        <div className="container-fluid">
            <div className="row ">
                <div className={"col-12 col-md-8 " + classes.height28} style={
                    {
                        backgroundImage: `url(${game.background_image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }
                }>
                    <div className="row">
                        <div className="col-12">
                            <h1 className={"text-center" + (dark ? ' text-primaryColor' : ' text-secondaryColor')}>{game.name}</h1>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-4 " + classes.height28}>
                    <div className="row">
                        <div className={"col-12 bg-danger " + classes.height56}>

                        </div>
                    </div>
                </div>
            </div>
            {/* Seconda row */}
            <div className={"row "}>
                <div className={"col-12 col-md-4 " + classes.height28}>
                    <div className="row">
                        <div className={"col-12 bg-primary " + classes.height56}>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-4 bg-secondary " + classes.height28}>

                </div>
            </div>
            <div className="row">
                <div className={"col-12 col-md-8 offset-md-4 bg-success " + classes.height28}>

                </div>
            </div>
        </div>
    )
}