import { useContext, useEffect, useState } from 'react'
import classes from './ProfileSection.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Sora from '../../../public/media/Sora.jpg'
import { GrEdit } from "react-icons/gr";
import supabase from '../../database/supabase';

export default function ProfileSection() {

    const { dark } = useContext(DarkContext);
    const { user, profile, getUser } = useContext(UserContext);
    const [isOpenBgImage, setIsOpenBgImage] = useState(false);
    const [isOpenProfileImage, setIsOpenProfileImage] = useState(false);
    const [fileBg, setFileBg] = useState();
    const [fileProfile, setFileProfile] = useState();
    const [previewBg, setPreviewBg] = useState();
    const [previewProfile, setPreviewProfile] = useState();
    const [userFavourites, setUserFavourites] = useState();
    const [userReviews, setUserReviews] = useState();

    /* apre e chiude carica immagine di background */
    const toggleBgChange = () => {
        setIsOpenBgImage(() => !isOpenBgImage);
    }
    /* chiude carica immagine di background */
    const closeBgChange = () => {
        setIsOpenBgImage(() => false);
    }

    /* immagine Background */
    const fileBgChange = (e) => {
        setFileBg(() => e.target.files[0]);
    }
    useEffect(
        () => {
            if (fileBg) {
                const imageUrl = URL.createObjectURL(fileBg);
                setPreviewBg(() => imageUrl);
            }
        }, [fileBg]
    )

    /* apre e chiude carica immagine di background */
    const toggleProfileChange = () => {
        setIsOpenProfileImage(() => !isOpenProfileImage);
    }
    /* chiude carica immagine di background */
    const closeProfileChange = () => {
        setIsOpenProfileImage(() => false);
    }

    /* immagine Background */
    const fileProfileChange = (e) => {
        setFileProfile(() => e.target.files[0]);
    }

    useEffect(
        () => {
            if (fileProfile) {
                const imageProfileUrl = URL.createObjectURL(fileProfile);
                setPreviewProfile(() => imageProfileUrl);
            }
        }, [fileProfile]
    )

    /* onSubmit */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (previewBg) {
            const fileBgExt = fileBg.name.split('.').pop(); //restituisce solo l'estensione del file
            const fileBgName = `${profile.id}${Math.random()}.${fileBgExt}`;
            await supabase.storage.from('avatars').upload(fileBgName, fileBg);
            await supabase
                .from('profiles')
                .upsert({ id: profile.id, avatar_background_url: fileBgName })
                .select()
            await getUser();
            await setPreviewBg(null);
            await closeBgChange();
        }
        if (previewProfile) {
            const fileProfileExt = fileProfile.name.split('.').pop(); //restituisce solo l'estensione del file
            const fileProfileName = `${profile.id}${Math.random()}.${fileProfileExt}`;
            await supabase.storage.from('avatars').upload(fileProfileName, fileProfile);
            await supabase
                .from('profiles')
                .upsert({ id: profile.id, avatar_url: fileProfileName })
                .select()
            await getUser();
            await setPreviewProfile(null);
            await closeProfileChange();
        }
    }

    /* Lista preferiti dell'utente */
    const getFavourites = async () => {
        let { data: favourites, error } = await supabase
            .from('favourites')
            .select()
            .eq('profile_id', profile.id)

        setUserFavourites(favourites);
    }

    useEffect(
        () => {
            getFavourites();
            getReviews();
        }, []
    )

    /* Lista recensioni utente */
    const getReviews = async () => {
        let { data: reviews, error } = await supabase
            .from('reviews')
            .select()
            .eq('profile_id', profile.id)

        setUserReviews(reviews);
    }
    /* Oggetto di stile */
    const containerStyle = {
        position: 'relative',
        height: '35vh',
        backgroundPosition: profile ? 'center' : 'initial',
        backgroundSize: profile ? 'cover' : 'initial',
        backgroundRepeat: profile ? 'no-repeat' : 'initial',
        backgroundImage: profile.avatar_background_url ? `url(${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_background_url})` : `url(${Sora})`,
    };

    const profileStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "10px solid var(--accentColor)",
        zIndex: "1",
        backgroundPosition: profile ? 'center' : 'initial',
        backgroundSize: profile ? 'cover' : 'initial',
        backgroundRepeat: profile ? 'no-repeat' : 'initial',
        backgroundImage: profile.avatar_url ? `url(${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url})` : `url(${Sora})`,
    }

    return (
        <div className={classes.card + " container-fluid p-0"}>
            <div className='position relative' style={containerStyle}>
                <GrEdit color='var(--accentColor)' size="3rem" className={classes.optionIcon} onClick={toggleBgChange} />
                {/* BackgroundForm */}
                <div className={"position-relative " + (!isOpenBgImage && 'd-none')}>
                    <img src={previewBg} alt="PreviewBg Immagine" className={classes.img_custom} />
                </div>
                <form className={`${classes.wrapper} ${(!isOpenBgImage && 'd-none')}`} onSubmit={handleSubmit}>
                    <div className={classes.fileBox}>
                        <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="file" onChange={fileBgChange} />
                    </div>
                    <div className="my-2">
                        <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                            <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className="text">Upload!</span>
                            <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        </button>
                    </div>
                </form>
                {/* !BackgroundForm */}
                {/* AvatarForm */}
                <form className={`${classes.wrapperProfile} ${(!isOpenProfileImage && 'd-none')}`} onSubmit={handleSubmit}>
                    <div className={classes.fileBoxProfile}>
                        <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="file" onChange={fileProfileChange} />
                    </div>
                    <div className="my-2">
                        <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                            <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className="text">Upload!</span>
                            <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        </button>
                    </div>
                </form>
            </div>
            <div style={profileStyle}>
                <GrEdit color='var(--accentColor)' size="3rem" className={classes.optionIconProfile} onClick={toggleProfileChange} />
                <div className={"position-relative " + (!isOpenProfileImage && 'd-none')}>
                    <img src={previewProfile} alt="" className={classes.img_profile_custom} />
                </div>
                {/* !AvatarForm */}
            </div>
            <div className={classes.info + ' row px-3 px-sm-5 pt-3'}>
                <div className="col-5 d-flex flex-column justify-content-between">

                    <h2>{`${profile.first_name} ${profile.last_name}`}</h2>
                    <h6 className='display-3'>{profile.username}</h6>
                    <h5>{user.email}</h5>

                </div>
                <div className="col-5 offset-2 col-sm-6 offset-sm-1 text-end">
                    <h2 className='mb-3'>Your Favourites</h2>
                    <ul className={'list-unstyled ' + classes.favourites}>
                        {userFavourites && userFavourites.map(favourite => {
                            return (
                                <div key={favourite.id}>
                                    <li className='fs-5 me-3 mb-2'>{favourite.game_name}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={classes.info2 + " row px-3 px-sm-5"}>
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <div>
                        <Link to={routes.settings} className={classes.fancy + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                            <span className={classes.top_key + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className={classes.text}>Edit Profile</span>
                            <span className={classes.bottom_key_1 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                            <span className={classes.bottom_key_2 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                        </Link>
                    </div>
                </div>
                <div className="col-7 col-sm-6 offset-sm-1 text-end">
                    <h2 className='my-3'>Your Reviews</h2>
                    <ul className={'list-unstyled ' + classes.reviews}>
                        {userReviews && userReviews.map(review => {
                            return (
                                <div key={review.id}>
                                    <li className='fs-5 me-3 d-sm-flex justify-content-sm-between'>
                                        <p className='mx-xl-3 text-start'>{review.game_name}:</p>
                                        <p>{review.review}</p>
                                    </li>
                                    <hr />
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}