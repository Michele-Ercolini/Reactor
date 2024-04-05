import { useContext } from 'react'
import classes from './AchievementCard.module.css'
import { DarkContext } from '../../Contexts/Contexts'
export default function AchievementCard({ achievement }) {

    const { dark } = useContext(DarkContext);

    return (
        <div className={classes.card_custom}>
            <div className="row g-0">
                <div className="position-relative col-md-4">
                    <img src={achievement.image} className={classes.card_img} alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className={classes.card_body + " d-flex flex-column justify-content-between " + (dark ? "dark" : "light")}>
                        <h2 className={classes.card_title}>{achievement.name}</h2>
                        <p className={classes.card_text + " text-center"}>{achievement.description}</p>
                        <h6 className='text-end me-2 fs-4'>Rarity: {achievement.percent}%</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <div className={classes.card_custom}>
        <img src={achievement.image} alt="Immagine gioco" className={classes.card_img} />
        <div className={classes.card_body + " d-flex flex-column justify-content-between "}>
            <h3 className="card-title">{achievement.name}</h3>
            <p className="card-text text-center">{achievement.description}</p>
            <h6 className='text-end me-5 fs-4'>Rarity: {achievement.percent}%</h6>
        </div>
    </div> */}
