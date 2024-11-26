import '../../assets/styles/creations.modulemin.css';
export default function Creations() {
    const creationTitles = ["Deep Earth", "Night Arcade", "Soccer Team VR", "The Grid", "From Up Above VR", "Pocket Borealis", "The Curiosity", "Make it Fisheye"];
    return (
        <section className="b-creations">
            <header className="b-creations__header">
                <h2 className="b-creations__title">Our Creations</h2>
                <button className="b-creations__see-all ">See All</button>
            </header>
            <ul className="b-creations__list">
                {Array.from({ length: 8 }).map((_, index) => (
                    <li key={index} className="b-creations__item">
                        <h3 className='b-creations__item__title'>{creationTitles[index]}</h3>
                    </li>
                ))}
            </ul>
            <button className="b-creations__see-all mobile">See All</button>
        </section>
    );
}
