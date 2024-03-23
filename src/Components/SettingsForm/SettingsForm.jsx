import { useContext, useState } from 'react';
import classes from './SettingsForm.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../routes';
export default function SettingsForm(){

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
        <form className="wrapper" onSubmit={handleSubmit}>
                <h1 className='text-center'>Modifica</h1>
                <div className="inputBox">
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Nome' name='first_name' onChange={handleChange} />
                </div>
                <div className="inputBox">
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Cognome' name='last_name' onChange={handleChange} />
                </div>
                <div className="inputBox">
                    <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Username' name='username' onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-center justify-content-md-end my-5">
                    <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                        <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className="text">Modifica!</span>
                        <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    </button>
                </div>
                <div className="auth">
                    <p className='text-center'>Non vuoi modificare?<Link className="link" to={routes.profile}>Torna indietro</Link></p>
                </div>
            </form>
    )
}