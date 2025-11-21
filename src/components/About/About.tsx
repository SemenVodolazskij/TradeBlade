import "./About.scss";
import "../../styles/global.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="container about__wrapper">
        <div className="about__left">
          <h2 className="about__title">О КОМПАНИИ</h2>

          <p className="about__text">
            Мы создали команду, для которой трейдинг — профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
          </p>

          <p className="about__text">
            Он предоставляет пользователям множество преимуществ, таких как
            более высокая скорость исполнения сделок и возможность создать
            учетную запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>

        <div className="about__right">
          <h3 className="about__box-title">
            Попробуйте сейчас и получите <br />5 дней бесплатного пользования
          </h3>

          <div className="about__form">
            <input type="email" placeholder="ВАШ E-MAIL" />
            <button>ПОПРОБОВАТЬ</button>
          </div>
        </div>
      </div>
    </section>
  );
};
