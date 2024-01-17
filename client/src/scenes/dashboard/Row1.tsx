import DashboardBox from "@/components/DashboardBox";
import AreaChartComponent from "@/components/AreaChart";
import LineChartComponent from "@/components/LineChart";
import BarChartComponent from "@/components/BarChart";

const Row1 = () => {
  
  return (
    <>
      <DashboardBox gridArea="a">
        <AreaChartComponent />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <LineChartComponent />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BarChartComponent />
      </DashboardBox>
    </>
  );
};

export default Row1;
