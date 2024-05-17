import styles from './styles.module.scss';
function ControlButtons(props:any) {
    const StartButton = (
        <div className={`${styles.btn} ${styles.btnOne} ${styles.btnStart}`}
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className={`${styles.btnGrp}`}>
            <div className={`${styles.btn} ${styles.btnTwo}`}
                onClick={props.handleReset}>
                Reset
            </div>
            <div className={`${styles.btn} ${styles.One}`}
                onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );
 
    return (
        <div className={`${styles.ControlButtons}`}>
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}

export default ControlButtons;