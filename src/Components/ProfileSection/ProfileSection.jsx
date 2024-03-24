import { useContext, useEffect, useState } from 'react'
import classes from './ProfileSection.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Sora from '../../../public/media/Sora.jpg'
import { GrUploadOption } from "react-icons/gr";
import supabase from '../../database/supabase';

export default function ProfileSection() {

    const { dark } = useContext(DarkContext);
    const { user, profile, getUser } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    const toggleChange = () => {
        setIsOpen(() => !isOpen);
    }

    const closeChange = () => {
        setIsOpen(() => false);
    }

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
        if (preview) {
            const fileExt = file.name.split('.').pop(); //restituisce solo l'estensione del file
            const fileName = `${profile.id}${Math.random()}.${fileExt}`;
            await supabase.storage.from('avatars').upload(fileName, file);
            await supabase
                .from('profiles')
                .upsert({ id: profile.id, avatar_background_url: fileName })
                .select()
            await getUser();
            await setPreview(null);
            await closeChange();
        }
    }

    const containerStyle = {
        position: 'relative',
        height: '30vh',
        backgroundPosition: profile ? 'center' : 'initial',
        backgroundSize: profile ? 'cover' : 'initial',
        backgroundRepeat: profile ? 'no-repeat' : 'initial',
        backgroundImage: profile && profile.avatar_background_url ? `url(${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_background_url})` : `url(${Sora})`,
    };

    return (
        <div className={classes.card + " container-fluid p-0"}>
            <div className='position relative' style={containerStyle}>
                <GrUploadOption color='var(--accent2Color)' size="3rem" className={classes.optionIcon} onClick={toggleChange} />
                {/* AvatarForm */}
                <div className={"position-relative " + (!isOpen && 'd-none')}>
                    <img src={preview} alt="Preview Immagine" className={classes.img_custom} />
                </div>
                <form className={`${classes.wrapper} ${(!isOpen && 'd-none')}`} onSubmit={handleSubmit}>
                    <div className={classes.fileBox}>
                        <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="file" onChange={fileChange} />
                    </div>
                    <div className="my-2">
                        <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                            <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className="text">Carica!</span>
                            <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        </button>
                    </div>
                </form>
                {/* !AvatarForm */}
            </div>
            <img src={profile && profile.avatar_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url}` : Sora} className={classes.profilo} alt="Foto del profilo" />
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