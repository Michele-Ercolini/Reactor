import { useEffect, useState } from "react";
import Offcanvas from "../Offcanvas/Offcanvas";

export default function Header({ title = "In Evidenza", subtitle = "" }) {

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
            {windowWidth < 1200
                ?
                <div className="container-fluid">
                    <div className="row align-items-center my-3">
                        <div className="col-1">
                            <Offcanvas />
                        </div>
                        <div className="col-10">
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