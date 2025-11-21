import { useState } from "react";
import "./Header.scss";
import "../../styles/global.scss";
import logo from "../../assets/icons/logo-TB.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <img src={logo} alt="TradeBlade" />
        </div>

        <nav className="header__nav">
          <a href="#">Цифры</a>
          <a href="#">Сделки онлайн</a>
          <a href="#">О компании</a>
          <a href="#">Как начать</a>
          <a href="#">Тарифы</a>
          <a href="#">Отзывы</a>
          <a href="#">FAQ</a>
        </nav>

        <div className="header__actions">
          <button className="btn login">Вход</button>
          <button className="btn register">Регистрация</button>
        </div>

        <div className="header__burger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`header__mobile ${open ? "active" : ""}`}>
        <div className="header__mobile-close" onClick={() => setOpen(false)}>
          ✕
        </div>

        <nav>
          <a href="#">Цифры</a>
          <a href="#">Сделки онлайн</a>
          <a href="#">О компании</a>
          <a href="#">Как начать</a>
          <a href="#">Тарифы</a>
          <a href="#">Отзывы</a>
          <a href="#">FAQ</a>
        </nav>

        <div className="mobile__actions">
          <button className="btn register">Регистрация</button>
          <button className="btn login">Войти</button>
        </div>
      </div>
    </header>
  );
};
