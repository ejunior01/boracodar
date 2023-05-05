import cover from "../assets/cover.png"
import style from "./Cover.module.css"

type CoverProps = {
    size: string
}

export function Cover({ size }: CoverProps) {
    return (
        <div className={`${style.cover} ${style[size]}`}>
            <img src={cover} />
        </div>
    )
}