import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useCallback, useEffect, useState } from "react";
import Offcanvas from "../Offcanvas/Offcanvas";

export default function Layout() {

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
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="d-none d-xl-block col-xl-3 p-0">
                        <Sidebar />
                    </div>
                    {windowWidth < 1200 ?
                        <Offcanvas /> : undefined
                    }
                    <div className="col-12 col-xl-9 pe-xl-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}