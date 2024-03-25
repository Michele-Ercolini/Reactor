import { useContext, useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import classes from './../Detail/Detail.module.css'
import { UserContext } from '../../Contexts/Contexts'
export default function Reviews({ game }) {

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
    }

    const getReviews = async () => {

        let { data: reviews, error } = await supabase
            .from('reviews')
            .select()
            .eq('game_id', game.id)

        setReviews(() => reviews)
    }

    useEffect(
        () => {
            getReviews()
        }, []
    )

    return (
        <div className={`col-12 col-md-8 offset-md-4 ${classes.height28} ${classes.bento5}`}>
            <div className={classes.reviews_section}>
                {reviews && reviews.map(review => {
                    return (
                        <div key={review.id}>
                            <p className="lead">{review.review}</p>
                            <p>{profile.username}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
            <input type="text" className={classes.reviews_input} placeholder='La tua recensione' onChange={handleChange} />
            <button className={classes.reviews_btn} onClick={handleClick}>Invia</button>
        </div>
    )
}