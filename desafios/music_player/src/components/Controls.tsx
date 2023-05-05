import { Play, Rewind, FastForward } from '@phosphor-icons/react'
import style from './Controls.module.css'

export function Controls() {
  return (
    <div className={style.controls}>
      <div className={style.control}>
        <button className="rewind">
          <Rewind size={28} weight="fill" />
        </button>
        <button className="play">
          <Play size={24} weight="fill" />
        </button>
        <button className="fastForward">
          <FastForward size={28} weight="fill" />
        </button>
      </div>
    </div>
  )
}
