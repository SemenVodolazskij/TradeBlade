import { useState } from "react";
import "./FAQ.scss";

const FAQ_DATA = [
  {
    question: "Что такое TradeBlade",
    answer:
      "Мы опытная команда, для которой трейдинг — профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Платформа предоставляет пользователям множество преимуществ, таких как высокая скорость работы API, удобная синхронизация и возможность создать учётную запись Binance через TradeBlade всего в один клик.",
  },
  {
    question: "Что TradeBlade предлагает инвесторам",
    answer:
      "Платформа предоставляет удобный кабинет инвестора, аналитические инструменты, автоматизированные стратегии и инструменты контроля рисков. TradeBlade стремится сделать процесс инвестирования максимально прозрачным и доступным, даже для начинающих пользователей.",
  },
  {
    question: "Должен ли я переводить свои средства на TradeBlade",
    answer:
      "Нет, ваши средства остаются на вашем биржевом аккаунте. TradeBlade работает через безопасное API-подключение, что позволяет выполнять операции без прямого перевода средств на платформу. Вы полностью контролируете управление активами.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Часто задаваемые вопросы</h2>

      <div className="faq__list">
        {FAQ_DATA.map((item, idx) => (
          <div
            className={`faq__item ${openIndex === idx ? "active" : ""}`}
            key={idx}
          >
            <button className="faq__question" onClick={() => toggle(idx)}>
              {item.question}
              <span className={`arrow ${openIndex === idx ? "open" : ""}`}>
                ⌄
              </span>
            </button>

            <div className={`faq__answer ${openIndex === idx ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
