import React from 'react';
import style from './Authorization.module.scss';
import logo from '/src/assets/icons/Logo.svg';
import { Link } from 'react-router-dom';

const Authorization = () => {
    return (
        <div className={style.authPage}>
            <div className={style.authForm}>
                <img src={logo} alt="QAZAQ STROY" width={90} height={30} />
                <span>Войти в аккаунт</span>
                <form action="">
                    <div className={style.login}>
                        <label htmlFor="username">Логин</label>
                        <input type="text" name="username" />
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" />
                        <span className={style.error}>Неправильный пароль</span>
                    </div>
                </form>
                <button>
                    <Link to='/home' className={style.link}>Войти</Link>
                </button>
            </div>
        </div>
    );
};

export default Authorization;
