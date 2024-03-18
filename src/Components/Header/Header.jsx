import { Link } from "react-router-dom";

export default function Header({title = "In Evidenza", subtitle = ""}) {
    return (
        <div className="container">
            <div className="row align-items-center my-3">
                <div className="col-12">
                    <h1 className="text-secondaryColor text-center text-md-start">{title}</h1>
                    <h3 className="text-secondaryColor text-center text-md-start">{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}