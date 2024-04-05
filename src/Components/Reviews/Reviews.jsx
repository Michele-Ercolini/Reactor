import { useContext, useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import classes from './../Detail/Detail.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import Sora from '../../../public/media/Sora.jpg'

export default function Reviews({ game }) {

    const { dark } = useContext(DarkContext);
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
        <>
            <div className={classes.reviews_section}>
                <h2 className='text-center mt-2'>Game Reviews</h2>
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
            <div className={classes.form + ' d-flex justify-content-between'}>
                <input type="text" className={classes.reviews_input + (dark ? ' dark' : ' light')} placeholder='Your Review' value={review} onChange={handleChange} />
                <button className={classes.reviews_btn} onClick={handleClick}>Enter</button>
            </div>
        </>
    )
}