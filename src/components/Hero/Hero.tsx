import "./Hero.scss";
import "../../styles/global.scss";
import heroImg from "../../assets/images/Hero-numbers-image.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            МОМЕНТАЛЬНО
            <br />
            КОПИРУЙ СДЕЛКИ
            <br />
            ПРОФИ ТРЕЙДЕРОВ
          </h1>

          <p className="hero__subtitle">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>

          <div className="hero__form">
            <input type="email" placeholder="ВАШ E-MAIL" />
            <button>НАЧАТЬ</button>
          </div>

          <span className="hero__note">5 дней бесплатного пользования</span>
        </div>

        <div className="hero__image">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};
