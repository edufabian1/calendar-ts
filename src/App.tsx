import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Item from "./components/list/item/Item";
import Title from "./components/title/Title";
import data from "./months.json";

interface IMonth {
  id: number;
  name: string;
  countDays: number;
  firstDay: number;
}

const App = () => {
  const months: IMonth[] = data;
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  const currentDate: number = new Date().getDate();
  const currentMonth: number = new Date().getMonth() + 1;

  const [month, setMonth] = useState<IMonth | undefined>();

  const isFirstDay = (index: number): React.CSSProperties =>
    index === 0 ? { gridColumnStart: month?.firstDay } : {};

  useEffect(() => {
    const test = () =>
      setMonth(months.find((x) => x.id === currentMonth));

    test();
  }, [currentDate, currentMonth, months]);

  return (
    <>
      <div className="calendar">
        <Title>{month?.name + " 2022"}</Title>
        <ol>
          {days.map((day: string, index: number) => (
            <Item key={index} className="day-name">
              {day}
            </Item>
          ))}
          {Array.from(Array(month?.countDays)).map(
            (item: string, index: number) => (
              <Item
                key={index}
                className={(currentDate === index + 1 && currentMonth === month?.id) ? "current-day" : ""}
                styles={isFirstDay(index)}
              >
                {index + 1}
              </Item>
            )
          )}
        </ol>
      </div>
      <div className="container-button">
        <Button
          className="button-primary previous"
          onClick={() => {
            if (month && months[month.id - 2]) {
              setMonth(months[month.id - 2]);
            }
          }}
          disabled={false}
        >
          Anterior
        </Button>
        <Button
          className="button-primary next"
          onClick={() => {
            if (month && months[month.id]) setMonth(months[month.id]);
          }}
          disabled={false}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default App;
