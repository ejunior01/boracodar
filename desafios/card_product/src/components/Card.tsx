import style from "./Card.module.css"
import sofa from "../assets/sofa.png"
import viewProduct from "../assets/view-product.svg"


export function Card() {
    return (
        <div className={style.card}>
            <div className={style.imageContainer}>
                <div className={style.image}>
                    <img src={sofa} alt="" />
                    <button>
                        <img src={viewProduct} alt="" />
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