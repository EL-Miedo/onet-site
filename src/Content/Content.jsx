import React from 'react';
import './Content.scss';
import mainImage from '../images/Photo1.jpg';
import mainImage2 from '../images/Photo2.jpg';
import mainImage3 from '../images/Tn7k9kpTURBXy8zMzJjNGUyMTM1NDU4MGJiM2VlNzEzMjMyNTFmY2MzOS5qcGeSlQLNBLAAwsOVAgDNAu7Cw94AA6EwAaExAaEzww.jpg';
import mainImage4 from '../images/Photo3.jpg';
import mainImage5 from '../images/Photo6.jpg';
import mainImage6 from '../images/Photo4.jpg';
const newsData = {
    main: {
        title: 'Kulesza wskazał winnego po Finlandii. Nie jest to Probierz ani "Lewy"',
        author: 'Dariusz Dobek',
        img: mainImage2,
    },

    mid: {
        title: 'Kaczyński tłumaczy się z nieobecności w Sejmie. "Dlatego nie mogłem"',
        img: mainImage,
    },
    side: [
        { title: 'Znaleźli drugi testament Diany. Zaskakująca "prawdziwa ostatnia wola"', img: mainImage3, label: null },
        { title: 'Incydent po uroczystości z Nawrockim. Ludzie zaczęli krzyczeć', img: mainImage4, label: 'W SKRÓCIE' },
        { title: 'Zwrot w sprawie spotkania Cezary Kulesza – Michał Probierz', img: mainImage5, label: null },
        { title: 'Gigantyczna chińska inwestycja w Polsce. Setki miejsc pracy', img: mainImage6, label: null },
    ],
};

const Content = () => {
    return (
        <main className="content">
            <div className="news-section">
                <div className="main-news">
                    <img src={newsData.main.img} alt="main news" />
                    <h2>{newsData.main.title}</h2>
                    <p>Autor: {newsData.main.author}</p>

                </div>

                <div className="mid-news">
                    <img src={newsData.mid.img} alt="mid news" />
                    <h3>{newsData.mid.title}</h3>
                </div>

                <div className="side-news">
                    {newsData.side.map((item, index) => (
                        <div key={index} className="side-news-item">
                            <img src={item.img} alt="side news" />
                            {item.label && <span className={`label ${item.label === 'W SKRÓCIE' ? 'brief' : 'live'}`}>{item.label}</span>}
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Content;
