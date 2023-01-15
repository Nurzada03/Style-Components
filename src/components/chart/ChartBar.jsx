import React from 'react'
import {
  ChartBarCounteiner,
  ChartBarInner,
  ChartBarFill,
  ChartBarLabel,
} from "./ChartBarStyle";

const ChartBar = ({maximumprice, currentPrice, label}) => {

    const fillHeight = (100 * currentPrice)/ maximumprice

  return (
    <ChartBarCounteiner>
      <ChartBarInner>
        <ChartBarFill style={{ height:`${fillHeight}%` }}></ChartBarFill>
      </ChartBarInner>

      <ChartBarLabel>{label}</ChartBarLabel>
    </ChartBarCounteiner>
  );
}

export default ChartBar
