import Hero from "../elements/Hero/Hero"
import Product from "../elements/Product/Product"
import About from "../elements/About/About"
import Banner from "../elements/Banner/Banner"

const Home = () => {
    return (
        <main>
            <div className="empty"></div>
            <div className="empty"></div>
            <Hero />
            <div id="product" className="empty"></div>
            <Product />
            <div className="empty"></div>
            <Banner />
            <div className="empty"></div>
            <About />
            <div className="empty"></div>
        </main>
    )
}

export default Home