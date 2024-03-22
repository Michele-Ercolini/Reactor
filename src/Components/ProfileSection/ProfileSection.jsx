import { useContext } from 'react'
import classes from './ProfileSection.module.css'
import { UserContext } from '../../Contexts/Contexts'
export default function ProfileSection() {

    const { user, profile } = useContext(UserContext);

    return (
        <div className={classes.card + " container-fluid p-0"}>
            <div className={classes.sfondo}></div>
            <img src="https://picsum.photos/500" className={classes.profilo} alt="Foto del profilo" />
            <div className='row p-5'>
                <div className="col-6">
                    <h3>{`${profile.first_name} ${profile.last_name}`}</h3>
                    <h2>{profile.username}</h2>
                    <h5>{user.email}</h5>
                </div>
                <div className="col-6 text-end">
                    <h2>I tuoi preferiti</h2>
                    <h2>Le tue recensioni</h2>
                </div>
            </div>
        </div>
    )
}