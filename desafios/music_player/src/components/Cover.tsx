import cover from "../assets/cover.png"
import style from "./Cover.module.css"

export function Cover() {
    return (
        <div className={style.cover}>
            <img src={cover} />
        </div>
    )
}