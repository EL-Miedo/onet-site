import React from 'react';
import './Header.scss';

import ad1 from '../images/Без названия 17.jpg';
import ad2 from '../images/Без названия 17.jpg';
import ad3 from '../images/Без названия 17.jpg';
import ad4 from '../images/Без названия 17.jpg';

export default function Header() {
    const navCategories = [
        'Wiadomości',
        'Sport',
        'Premium',
        'Biznes',
        'Regionalne',
        'Pogoda',
        'Wideo i Audio',
        'Motoryzacja',
        'Nieruchomości',
        '...'
    ];

    return (
        <header className="header">
            <div className="container">

                <div className="top-bar">
                    <div className="logo">
                        <div className="logo-circle"></div>
                        <span>Onet</span>
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Szukaj w Google" />
                        <div className="google-logo"></div>
                        <button>szukaj</button>
                    </div>

                    <div className="top-right-buttons">
                        <button className="btn like">♥</button>
                        <button className="btn games">🎮</button>
                        <button className="btn special">special</button>
                        <button className="btn subscribe">subskrybuj</button>
                        <div className="icons">
                            <div className="icon notification">!</div>
                            <div className="icon">⚙</div>
                            <div className="icon">👤</div>
                        </div>
                    </div>
                </div>

                <nav className="nav-categories">
                    {navCategories.map((category, i) => (
                        <button
                            key={i}
                            className={category === 'Premium' ? 'active' : ''}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                <div className="middle-bar">
                    <div className="weather">
                        <div className="weather-item">
                            <span>Warszawa</span>
                            <span className="temp">15°</span>
                            <span className="icon">☀️</span>
                        </div>
                        <div className="weather-item air-conditioner">
                            <span className="good">Klimatyzacja dobra</span>
                            <span className="airly">Airly</span>
                        </div>
                    </div>

                    <div className="services">
                        <span className="special-offer">specjalna oferta</span>
                        <span className="autopromo">automatyczna promocja</span>
                        <div className="features">
                            <span className="icon-tv">📺</span>
                            <span className="icon-horoscope">♓</span>
                            <span className="icon-podcasts">🎙️</span>
                            <span className="icon-gift">🎁</span>
                        </div>
                    </div>

                    <div className="ads">
                        <div className="ad">
                            <img src={ad1} alt="Reklama 1" />
                        </div>
                        <div className="ad">
                            <img src={ad2} alt="Reklama 2" />
                        </div>
                        <div className="ad">
                            <img src={ad3} alt="Reklama 3" />
                        </div>
                        <div className="ad">
                            <img src={ad4} alt="Reklama 4" />
                        </div>
                    </div>
                </div>

                <div className="ticker">
                    <span>Aktualności:</span>
                    <span><strong>Ważna wiadomość</strong> - teraz w naszej ofercie...</span>
                    <span>Inne wiadomości...</span>
                </div>

            </div>
        </header>
    );
}

