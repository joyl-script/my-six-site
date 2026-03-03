import { Button } from "../../components/Button"

const Hero = () => {
    const paragraph = 'Высокое качество отрисовки \nна плотной бумаге или льняном \nхолсте. Редкие произведения, \nдоступные цены.'
    return (
        <>
        <section className="hero">
            <div className="heroContainer">
                <picture>
                    <img src='/images/hero.png' />
                </picture>
                <div className="heroText">
                    <h1>Реплики картин от <span>Ink. House</span></h1>
                    <p>{paragraph}</p>
                    <Button class='greenBtn' text='Продукция' />
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero