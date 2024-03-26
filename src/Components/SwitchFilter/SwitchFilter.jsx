import classes from './SwitchFilter.module.css'
export default function SwitchFilter() {
    return (
        <div className={classes['toggle-container']}>
            <input className={classes['toggle-input']} type="checkbox" />
            <div className={classes['toggle-handle-wrapper']}>
                <div className={classes['toggle-handle']}>
                    <div className={classes['toggle-handle-knob']}></div>
                    <div className={classes['toggle-handle-bar-wrapper']}>
                        <div className={classes['toggle-handle-bar']}></div>
                    </div>
                </div>
            </div>
            <div className={classes['toggle-base']}>
                <div className={classes['toggle-base-inside']}></div>
            </div>
        </div>
    )
}