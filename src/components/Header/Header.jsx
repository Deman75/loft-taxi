import React from 'react'
import './Header.css'

import Logo from '../Logo/Logo.jsx';

function Header(props) {
    const page = {
        Карта: 'map',
        Профиль: 'profile',
        Войти: 'login'
    }

    const click = (e) => {
        const items = document.querySelectorAll('.nav__button');

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('nav__button_active')
        }

        e.target.classList.add('nav__button_active');

        props.setPage(page[e.target.innerText]);
    }
    
    return (
        <header className="header">
            <div className='container header__container'>
                <Logo></Logo>
                <ul className="nav" onClick={click}>
                    <li className='nav__item'>
                        <button type='button' className='nav__button nav__button_active'>
                            Карта
                        </button>
                    </li>
                    <li className='nav__item'>
                        <button type='button' className='nav__button'>
                            Профиль
                        </button>
                    </li>
                    <li className='nav__item'>
                        <button type='button' className='nav__button'>
                            Войти
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;