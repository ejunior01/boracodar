import style from "./Card.module.css"
import productImg from "../assets/sofa.png"
import productGit from "../assets/sofa.gif"
import view from "../assets/view-product.svg"
import close from '../assets/close.svg'
import { useState } from "react"


export function Card() {
    const [viewProduct, setWiewProduct] = useState(false);

    function handleClick() {
        setWiewProduct(!viewProduct)
    }

    return (
        <div className={style.card}>
            <div className={style.imageContainer}>
                <div className={style.image}>
                    {
                        viewProduct ? <img src={productGit} alt="" /> : <img src={productImg} alt="" />
                    }
                    <button onClick={handleClick}>
                    {
                        viewProduct ? <img src={close} className={style.close} /> : <img src={view} alt="" />
                    }
                    </button>
                </div>
            </div>

            <div className={style.productInfo}>
                <div className={style.info}>
                    <span className={style.code}>CÓDIGO: 42404</span>
                    <h1 className={style.title}>Sofá Margot II - Rosé</h1>
                    <span className={style.price}>R$ 4.000</span>
                </div>
                <button>
                    ADICIONAR À CESTA
                </button>
            </div>
        </div>
    )
}