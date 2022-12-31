import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplication } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplication.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;
