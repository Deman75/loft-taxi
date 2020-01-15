import React from 'react'

import './Main.css'

import Logo from '../../components/Logo/Logo'
// import Login from '../../components/Login/Login'
import Reg from '../../components/Reg/Reg'

function Main() {
    return (
        <div className='wrapper wrapper__main'>
            <div className='container container__main'>
                <Logo></Logo>
                {/* <Login></Login> */}
                <Reg></Reg>
            </div>
        </div>
    )
}

export default Main;