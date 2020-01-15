import React from 'react'

import './Reg.css'

function Reg() {
    return (
        <div className='reg'>
            <h3 className='reg__title'>Регистрация</h3>
            <div className='reg__desc'>
                <span>Уже зарегистрирован?</span>
                <a className='reg__reg' href="http://">Войти</a>
            </div>
            <form className='reg__form' action="POST">
                <div className='form__input form__input_active'>
                    <div className='input__desc'>Адрес электронной почты</div>
                    <input className='input__input' type="email" name='email'/>
                </div>

                <div className='form__input-wrap'>
                    <div className='form__input'>
                        <div className='input__desc'>Имя</div>
                        <input className='input__input' type="text" name='name'/>
                    </div>
                    <div className='form__input'>
                        <div className='input__desc'>Фамилия</div>
                        <input className='input__input' type="text" name='surname'/>
                    </div>   
                </div>

                <div className='form__input'>
                    <div className='input__desc'>Пароль</div>
                    <input className='input__input' type="password" name='password'/>
                </div>
                <div className='form__button'>
                    <button className='form__submit' type='submit'>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default Reg;