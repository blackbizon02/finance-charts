import DashboardBox from "@/components/DashboardBox";
import OperationalExpensesChart from "@/components/OperationalExpensesChart";
import PieChartComponent from "@/components/PieChart";
import ScatterChartComponent from "@/components/ScatterChart";

const Row2 = () => {
     
  return (

    <>
      <DashboardBox gridArea="d">
        <OperationalExpensesChart />
      </DashboardBox>
      <DashboardBox gridArea="e">
        <PieChartComponent />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <ScatterChartComponent />
      </DashboardBox>
    </>
  );
};

export default Row2;
