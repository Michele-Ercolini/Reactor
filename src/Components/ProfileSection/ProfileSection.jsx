import { useContext } from 'react'
import classes from './ProfileSection.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Sora from '../../../public/media/Sora.jpg'
export default function ProfileSection() {

    const { dark } = useContext(DarkContext);
    const { user, profile } = useContext(UserContext);

    return (
        <div className={classes.card + " container-fluid p-0"}>
            <div className={classes.sfondo}></div>
            <img src={profile.avatar_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url}` : Sora} className={classes.profilo} alt="Foto del profilo" />
            <div className={classes.info + ' row px-3 py-5 p-sm-5'}>
                <div className="col-5">
                    {profile &&
                        <>
                            <h3>{`${profile.first_name} ${profile.last_name}`}</h3>
                            <h2>{profile.username}</h2>
                            <h5>{user.email}</h5>
                        </>
                    }
                </div>
                <div className="col-5 offset-2 text-end">
                    <h2>I tuoi preferiti</h2>
                    <h2>Le tue recensioni</h2>
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <Link to={routes.settings} className={classes.fancy + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                        <span className={classes.top_key + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={classes.text}>Modifica Profilo</span>
                        <span className={classes.bottom_key_1 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={classes.bottom_key_2 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}