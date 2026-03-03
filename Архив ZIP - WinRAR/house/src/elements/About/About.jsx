const About = () => {
    const paragraph = 'Значимость этих проблем настолько очевидна, что базовый вектор \nразвития позволяет оценить значение экспериментов, поражающих \nпо своей масштабности и грандиозности. Мы вынуждены отталкиваться \nот того, что консультация с широким активом.'

    return (
        <section id="about" className="about">
            <div className="aboutContainer">
                <picture className="aboutPic">
                    <img src="/public/images/about.png" />
                </picture>

                <h1>Наша команда</h1>

                <p>{paragraph}</p>
            
                <div className="aboutAvatar">
                    <picture>
                        <img src="/public/images/avatar1.jpg" />
                    </picture>
                    <picture>
                        <img src="/public/images/avatar2.jpg" />
                    </picture>
                    <picture>
                        <img src="/public/images/avatar3.jpg" />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default About