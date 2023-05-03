import { Play, Rewind, FastForward } from "@phosphor-icons/react";
import style from "./PlayerControls.module.css"


export function PlayerControls() {
    return (
        <div className={style.playerControls}>
            <div className={style.controls}>
                <Rewind size={28} weight="fill" />
                <Play size={24} weight="fill" />
                <FastForward size={28} weight="fill" />
            </div>
            <div className="duration">

            </div>
        </div>
    )
}