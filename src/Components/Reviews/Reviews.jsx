import { useContext, useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import classes from './../Detail/Detail.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
export default function Reviews({ game }) {

    const {dark} =useContext(DarkContext);
    const { profile } = useContext(UserContext);
    const [review, setReview] = useState();
    const [reviews, setReviews] = useState();

    const handleChange = (e) => {
        setReview(() => e.target.value)
    }

    const handleClick = async () => {

        const { data, error } = await supabase
            .from('reviews')
            .insert([
                { profile_id: profile.id, game_id: game.id, game_name: game.name, review: review },
            ])
            .select()

        getReviews();
        setReview('');
    }

    const getReviews = async () => {

        let { data: reviews, error } = await supabase
            .from('reviews')
            .select('*, profile: profiles(username, avatar_url)')
            .eq('game_id', game.id)

        setReviews(() => reviews)
    }

    useEffect(
        () => {
            getReviews()
        }, []
    )

    return (
        <div className={`col-12 col-md-8 offset-md-4 ${classes.height28}`}>
            <div className={classes.reviews_shadow}>
            <div className={classes.reviews_section}>
                <h2 className='text-center'>Recensioni Gioco</h2>
                {reviews && reviews.map(review => {
                    return (
                        <div key={review.id}>
                            <div className='d-flex justify-content-between align-items-end' >
                                <p>{review.review}</p>
                                <div className='d-flex'>
                                    <p className='my-auto'>{review.profile.username}</p>
                                    <img src={profile && profile.avatar_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${review.profile.avatar_url}` : Sora} className={classes.chat_img + ' rounded-circle'} alt="immagine profilo" />
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>

            </div>
            <div className='d-flex justify-content-between'>
                <input type="text" className={classes.reviews_input + (dark ? ' dark' : ' light')} placeholder='La tua recensione' value={review} onChange={handleChange} />
                <button className={classes.reviews_btn} onClick={handleClick}>Invia</button>
            </div>
        </div>
    )
}