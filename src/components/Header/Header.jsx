import React from 'react';
import './Header.css';

import Logo from '../Logo/Logo.jsx';

function Header(props) {
    const pages = props.pages
    
    const handleNavClick = (e) => {
        e.preventDefault();

        props.setPage(e.target.dataset.id);
    }
    
    return (
        <header className="header">
            <div className='container header__container'>
                <Logo></Logo>
                <ul className="nav">
                    {pages.map(item => 
                         (
                            <li
                                key={item.index}
                                className={`nav__item ${item.href === props.activePage
                                    ? 'nav__item_active'
                                    : null}`}
                            >
                                <a
                                    href="http://"
                                    onClick={handleNavClick}
                                    className='nav__button'
                                    data-id={item.href}
                                >
                                    {item.title}
                                </a>
                            </li>)
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;