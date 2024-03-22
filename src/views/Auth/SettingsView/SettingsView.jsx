import { useContext, useState } from "react";
import { DarkContext, UserContext } from "../../../Contexts/Contexts";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../../routes";
import classes from './SettingsView.module.css'

export default function SettingsView() {

    const { dark } = useContext(DarkContext);

    const { profile, updateProfile } = useContext(UserContext);

    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            first_name: profile && profile.first_name,
            last_name: profile && profile.last_name,
            username: profile && profile.username
        }
    )

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(form);
        navigate(routes.profile);
    }

    return (
        <div className="col-12 col-sm-10 col-lg-6 ">
            <form className={classes.wrapper} onSubmit={handleSubmit}>
                <h1 className='text-center'>Modifica</h1>
                <div className={classes.inputBox}>
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Nome' name='first_name' onChange={handleChange} />
                </div>
                <div className={classes.inputBox}>
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Cognome' name='last_name' onChange={handleChange} />
                </div>
                <div className={classes.inputBox}>
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Username' name='username' onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-center justify-content-md-end my-5">
                    <button className={classes.fancy + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                        <span className={classes.top_key + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={classes.text}>Modifica!</span>
                        <span className={classes.bottom_key_1 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={classes.bottom_key_2 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    </button>
                </div>
                <div className={classes.auth}>
                    <p className='text-center'>Non vuoi modificare?<Link className={classes.link} to={routes.profile}>Torna indietro</Link></p>
                </div>
            </form>
        </div>
    )
}
