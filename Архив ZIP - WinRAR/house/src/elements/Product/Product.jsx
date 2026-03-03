import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import DB from "../../database/db"

const Product = () => {
    const [select, setSelect] = useState('Франция')

    const filter = (DB && DB.filter(product => product.categ === select))

    useEffect(() => {
        filter
    }, [select])

    return (
        <section className="product">

            <div className="productContainer">

                <h1>Репродукции</h1>

                <div className="productBtns">

                    <Button click={() => setSelect('Франция')}
                            class={`productBtn ${select === 'Франция' ? "active" : ""}`}
                            text='Франция' />
                    <Button click={() => setSelect('Германия')} 
                            class={`productBtn ${select === 'Германия' ? "active" : ""}`}
                            text='Германия' />
                    <Button click={() => setSelect('Англия')}
                            class={`productBtn ${select === 'Англия' ? "active" : ""}`}
                            text='Англия' />
                
                </div>
                
                <div className="productBoxes">

                    {filter.map(product => (
                        <div className="productBox" key={product.id}>
                            <picture>
                                <img src={`/images/${product.img}`} />
                            </picture>
                            <h4>{product.author}</h4>
                            <h2>{product.name}</h2>
                            <p>{product.lore}</p>
                            <h3>{product.cost} руб</h3>
                            
                            <Button class='greenProduct'
                                    text='В корзину' />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Product