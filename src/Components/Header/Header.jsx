import { useEffect, useState } from "react";
import Offcanvas from "../Offcanvas/Offcanvas";
import classes from './Header.module.css'

export default function Header({ title = "Recommended", subtitle = "" }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Aggiungi un listener per il ridimensionamento della finestra
        window.addEventListener('resize', updateWindowWidth);

        // Rimuovi il listener quando il componente viene smontato
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, [windowWidth]);

    return (
        <>
            {windowWidth < 1400
                ?
                <div className="container-fluid">
                    <div className="row align-items-center my-3 position-relative">
                        <div className={classes.open_offcanvas}>
                            <Offcanvas />
                        </div>
                        <div className="col-12">
                            <h1 className="text-center">{title}</h1>
                            <h3 className="text-center">{subtitle}</h3>
                        </div>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="row align-items-center my-3">
                        <div className="col-12">
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}