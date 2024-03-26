import classes from './AchievementCard.module.css'
export default function AchievementCard({ achievement }) {
    return (
        <div className={classes.card_custom}>
            <img src={achievement.image} alt="Immagine gioco" className={classes.card_img} />
            <div className={classes.card_body + " d-flex flex-column justify-content-between"}>
                <h3 className="card-title">{achievement.name}</h3>
                <p className="card-text text-center">{achievement.description}</p>
                <h6 className='text-end me-5 fs-4'>Rarity: {achievement.percent}%</h6>
            </div>
        </div>
    )
}