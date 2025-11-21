import "./Footer.scss";
import "../../styles/global.scss";
import logo from "../../assets/icons/logo-TB.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <h4 className="footer__title">Быстрая навигация</h4>

          <nav className="footer__nav">
            <a href="#">Цифры</a>
            <a href="#">Сделки онлайн</a>
            <a href="#">О компании</a>
            <a href="#">TradeBlade это</a>
            <a href="#">Тарифы</a>
            <a href="#">FAQ</a>
          </nav>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__right">
          <div className="footer__logo">
            <img src={logo} alt="TradeBlade" />
          </div>

          <p className="footer__copy">© 2022 TradeBlade. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
