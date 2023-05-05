import style from './Progress.module.css'

export function Progress() {
  return (
    <div className={style.progress}>
      <div className={style.progressBar}>
        <span></span>
      </div>
      <div className={style.time}>
        <span className={style.duration}>03:20</span>
        <span className={style.remainingDuration}>00:12</span>
      </div>
    </div>
  )
}
