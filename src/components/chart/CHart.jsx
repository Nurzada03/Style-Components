import React from "react";

import { ChartCounteinerFirst } from "./ChartStyle";
import ChartBar from "./ChartBar";

const Chart = ({ expenses }) => {
  const maximumrPrice = 2000;

  const months = [
    {
      label: "Январь",
      currentPrice: 0,
    },

    {
      label: "февраль",
      currentPrice: 0,
    },
    {
      label: "март",
      currentPrice: 0,
    },
    {
      label: "апрель",
      currentPrice: 0,
    },
    {
      label: "май",
      currentPrice: 0,
    },
    {
      label: "июнь",
      currentPrice: 0,
    },
    {
      label: "июль",
      currentPrice: 0,
    },
    {
      label: "августь",
      currentPrice: 0,
    },
    {
      label: "сентябрь",
      currentPrice: 0,
    },
    {
      label: "октябрь",
      currentPrice: 0,
    },
    {
      label: "ноябрь",
      currentPrice: 0,
    },
    {
      label: "декабрь",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrice += item.price;
  });

  return (
    <ChartCounteinerFirst>
      {months.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumprice={maximumrPrice}
          />
        );
      })}
    </ChartCounteinerFirst>
  );
};

export default Chart;
