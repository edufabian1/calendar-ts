import React from "react";
import "./App.css";
import Item from "./components/list/item/Item";
import Title from "./components/title/Title";

interface IMonth {
  name: string;
  countDays: number;
  firstDay: number;
}

const App = () => {
  const currentDate: number = new Date().getDate();

  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  const month: IMonth = {
    name: "Enero",
    countDays: 31,
    firstDay: 6,
  };

  const isFirstDay = (index: number): React.CSSProperties => {
    return index === 0 ? { gridColumnStart: month.firstDay } : {};
  };

  return (
    <div className="calendar">
      <Title>Enero 2022</Title>
      <ol>
        {days.map((day: string, index: number) => (
          <Item key={index} className="day-name">
            {day}
          </Item>
        ))}
        {Array.from(Array(month.countDays)).map(
          (item: string, index: number) => (
            <Item
              key={index}
              className={currentDate === index + 1 ? "current-day" : ""}
              styles={isFirstDay(index)}
            >
              {index + 1}
            </Item>
          )
        )}
      </ol>
    </div>
  );
};

export default App;
