import "./Profit.scss";
import "../../styles/global.scss";

export const Profit = () => {
  return (
    <section className="numbers">
      <div className="container numbers__inner">
        <div className="numbers__title-block">
          <h2 className="numbers__title">Цифры</h2>
          <p className="numbers__date">Сентябрь, 2022</p>
        </div>

        <div className="numbers__stats">
          <div className="numbers__item">
            <span className="numbers__label">Торговой прибыли</span>
            <span className="numbers__value">2756%</span>
          </div>

          <div className="numbers__item">
            <span className="numbers__label">Фьючерсных и спотовых сделок</span>
            <span className="numbers__value">67</span>
          </div>

          <div className="numbers__item">
            <span className="numbers__label">Прибыль подписчиков</span>
            <span className="numbers__value">375000</span>
          </div>
        </div>
      </div>
    </section>
  );
};
