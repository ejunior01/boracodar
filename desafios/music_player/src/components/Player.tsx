import { Cover } from "./Cover"
import { Description } from "./Description"
import { PlayerControls } from "./PlayerControls"

import style from "./Player.module.css"

export function Player() {
    return (
        <div className={style.player}>
            <Cover />
            <Description />
            <PlayerControls />
        </div>
    )
}