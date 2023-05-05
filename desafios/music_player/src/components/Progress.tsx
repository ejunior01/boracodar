import progressBar from "../assets/progress_bar.svg"
import style from "./Progress.module.css"

export function Progress() {
    return (
        <div className={style.progress}>
            <div className={style.progressBar}>
                <img src={progressBar} />
            </div>
            <div className={style.time}>
                <span className={style.duration}>03:20</span>
                <span className={style.remainingDuration}>00:12</span>
            </div>
        </div>
    )

}