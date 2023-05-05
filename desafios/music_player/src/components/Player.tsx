import React from "react"
import style from "./Player.module.css"

type PlayerProps = {
    format: string
    children: React.ReactNode
}

export function Player({format, children }: PlayerProps) {
    return (
        <div className={`${style.default} ${style[format]}`}>
            {children}
        </div>
    )
}