import React, { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplication: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartContainer;
