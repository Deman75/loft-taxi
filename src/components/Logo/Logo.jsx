import React from 'react'
import './Logo.css'

function Logo() {
    return (
        <div className="logo">
            <div className='logo-img'>
                <img className='logo__img-img' src="./images/logo.png" alt="loft-taxi"/>
            </div>
            <span className='desc'>Loft Taxi</span>
        </div>
    );
}

export default Logo;