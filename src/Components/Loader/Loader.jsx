import classes from './Loader.module.css'
export default function Loader() {
    return (
        <div className={classes['terminal-loader']}>
            <div className={classes['terminal-header']}>
                <div className={classes['terminal-title']}>Status</div>
                <div className={classes['terminal-controls']}>
                    <div className={`${classes.control} ${classes.close}`}></div>
                    <div className={`${classes.control} ${classes.minimize}`}></div>
                    <div className={`${classes.control} ${classes.maximize}`}></div>
                </div>
            </div>
            <div className={classes.text}>Loading...</div>
        </div>
    )
}