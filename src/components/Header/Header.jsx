import React from 'react'
import './Header.css'

import Logo from '../Logo/Logo.jsx';

function Header() {
    return (
        <header className="header">
            <div className='container header__container'>
                <Logo></Logo>
                <ul className="nav">
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