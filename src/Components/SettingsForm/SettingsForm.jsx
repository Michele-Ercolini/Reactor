import { useContext, useEffect, useState } from 'react';
import classes from './SettingsForm.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../routes';
import supabase from '../../database/supabase';
export default function SettingsForm() {

    const { dark } = useContext(DarkContext);

    const { profile, updateProfile, getUser } = useContext(UserContext);

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

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    const fileChange = (e) => {
        setFile(() => e.target.files[0]);
    }

    useEffect(
        () => {
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setPreview(() => imageUrl);
            }
        }, [file]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(form);
        if(preview){
            const fileExt = file.name.split('.').pop(); //restituisce solo l'estensione del file
            const fileName = `${profile.id}${Math.random()}.${fileExt}`;
            await supabase.storage.from('avatars').upload(fileName, file);
            await supabase
                .from('profiles')
                .upsert({ id: profile.id, avatar_url: fileName })
                .select()
            await getUser();
        }
        navigate(routes.profile);
    }

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <h1 className='text-center'>Edit Profile</h1>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Name' name='first_name' onChange={handleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Surname' name='last_name' onChange={handleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Username' name='username' onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-end my-5">
                <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                    <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className="text">Edit!</span>
                    <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                </button>
            </div>
            <div className="auth">
                <p className='text-center p-0'>Don't want to edit?<Link className="link" to={routes.profile}>Go Back</Link></p>
            </div>
        </form>
    )
}