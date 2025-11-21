import React, { useState } from "react";
import "./Tariffs.scss";

interface Tariff {
  title: string;
  discount?: string;
  price12: string;
  price6: string;
  price3: string;
  features: string[];
}

export const Tariffs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"spot" | "futures">("spot");

  const spotTariffs: Tariff[] = [
    {
      title: "STANDART",
      discount: "-35%",
      price12: "$234",
      price6: "$117",
      price3: "$58",
      features: [
        "✔ Ручной трейдинг",
        "✔ Автоматическое или полуавтоматическое копирование сделок",
        "✔ Личный кабинет со статистикой",
        "✔ Среднесрочные сделки с уровнем набора позиций",
      ],
    },
    {
      title: "VIP",
      discount: "-35%",
      price12: "$585",
      price6: "$292",
      price3: "$146",
      features: [
        "✔ Ручной трейдинг",
        "✔ Автоматическое или полуавтоматическое копирование сделок",
        "✔ Личный кабинет со статистикой",
        "✔ Криптосигналы",
        "✔ Доступ в VIP чат",
        "✔ Авторский курс по трейдингу",
      ],
    },
  ];

  const futuresTariffs: Tariff[] = [
    {
      title: "VIP+",
      discount: "-35%",
      price12: "$699",
      price6: "$349",
      price3: "$175",
      features: [
        "✔ Максимальная скорость сигналов",
        "✔ Персональная поддержка",
        "✔ Сложные стратегии",
        "✔ Копирование ТОП трейдеров",
      ],
    },
    {
      title: "MVP",
      discount: "-35%",
      price12: "$1000",
      price6: "$500",
      price3: "$250",
      features: [
        "✔ Минимальная задержка сигналов",
        "✔ Закрытые Premium-алерты",
        "✔ Отдельная линия поддержки",
      ],
    },
  ];

  const currentTariffs = activeTab === "spot" ? spotTariffs : futuresTariffs;

  return (
    <section className="tariffs-section">
      <div className="container">
        <h2 className="section-title">ТАРИФЫ</h2>

        <div className="tabs">
          <button
            className={activeTab === "spot" ? "active" : ""}
            onClick={() => setActiveTab("spot")}
          >
            СПОТ
          </button>
          <button
            className={activeTab === "futures" ? "active" : ""}
            onClick={() => setActiveTab("futures")}
          >
            ФЬЮЧЕРС
          </button>
        </div>

        <div className="tariff-cards">
          {currentTariffs.map((item, idx) => (
            <TariffCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TariffCard: React.FC<{ item: Tariff; index: number }> = ({
  item,
  index,
}) => {
  const [period, setPeriod] = useState<"12" | "6" | "3">("12");

  const getPrice = (): string => {
    if (period === "12") return item.price12;
    if (period === "6") return item.price6;
    return item.price3;
  };

  const bgClass =
    index % 2 === 0 ? "tariff-card-background1" : "tariff-card-background2";

  return (
    <div className={`tariff-card ${bgClass}`}>
      <h3>{item.title}</h3>

      <ul className="features">
        {item.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="price-row">
        <div className="price-col">
          <span className="discount">{item.discount}</span>
          <span className="price">{getPrice()}</span>
        </div>

        <select
          className="months-select"
          value={period}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPeriod(e.target.value as "12" | "6" | "3")
          }
        >
          <option value="12">12 месяцев</option>
          <option value="6">6 месяцев</option>
          <option value="3">3 месяца</option>
        </select>
      </div>

      <button className="btn-try">
        ПОПРОБОВАТЬ
        <p className="btn-try-subtext">5 дней бесплатно</p>
      </button>
    </div>
  );
};
