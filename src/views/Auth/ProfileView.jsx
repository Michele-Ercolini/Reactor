import { useContext } from "react";
import ProfileSection from "../../Components/ProfileSection/ProfileSection";
import { UserContext } from "../../Contexts/Contexts";


export default function ProfileView(){

    const {profile} =useContext(UserContext);

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-9">
                    {profile && <ProfileSection />}
                </div>
            </div>
        </div>
    )
}