import React from 'react'

import './Login.css'

function Login() {
    return (
        <div className='login'>
            <h3 className='login__title'>Войти</h3>
            <div className='login__desc'>
                <span>Новый пользователь?</span>
                <a className='login__reg' href="http://">Зарегистрируйтесь</a>
            </div>
            <form className='login__form' action="POST">
                <div className='form__input form__input_active'>
                    <div className='input__desc'>Имя пользователя*</div>
                    <input className='input__input' type="email" name='login'/>
                </div>
                <div className='form__input'>
                    <div className='input__desc'>Пароль*</div>
                    <input className='input__input' type="password" name='password'/>
                </div>
                <div className='form__button'>
                    <button className='form__submit' type='submit'>Войти</button>
                </div>
            </form>
        </div>
    );
}

export default Login;