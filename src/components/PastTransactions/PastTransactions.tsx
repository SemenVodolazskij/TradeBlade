import { Swiper, SwiperSlide } from "swiper/react";
import "./PastTransactions.scss";
import { useState } from "react";

interface DealCard {
  pair: string;
  type: string;
  profit: string;
  tooltip: string;
  entryDate: string;
}

const deals: DealCard[] = [
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 день назад",
    profit: "58.6206%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT · 1 день назад",
    profit: "6.02%",
    tooltip: "Цель 3",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT · 1 день назад",
    profit: "16.3%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 день назад",
    profit: "58.6206%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT · 1 день назад",
    profit: "6.02%",
    tooltip: "Цель 3",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT · 1 день назад",
    profit: "16.3%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 день назад",
    profit: "58.6206%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT · 1 день назад",
    profit: "6.02%",
    tooltip: "Цель 3",
    entryDate: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT · 1 день назад",
    profit: "16.3%",
    tooltip: "Цель 4",
    entryDate: "Дата входа 06.10.2022",
  },
];

export const PastTransactions = () => {
  const [progress, setProgress] = useState(0);

  return (
    <section className="deals-section">
      <div className="container">
        <h2 className="deals-title">ПРОШЕДШИЕ СДЕЛКИ</h2>
        <p className="deals-online">🟢 Онлайн</p>

        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          onProgress={(swiper, prog) => setProgress(prog)}
        >
          {deals.map((deal, idx) => (
            <SwiperSlide key={idx} style={{ width: "300px" }}>
              <div className="deal-card">
                <div className="deal-bg-icon" />

                <div className="deal-pair">{deal.pair}</div>
                <div className="deal-type">{deal.type}</div>

                <div className="deal-label">ПРИБЫЛЬ</div>
                <div className="deal-profit">{deal.profit} ↑</div>

                <div className="deal-tooltip">{deal.tooltip}</div>
                <div className="deal-date">{deal.entryDate}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="deals-progress">
          <div
            className="progress-bar"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};
