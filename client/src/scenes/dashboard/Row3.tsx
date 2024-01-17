import DashboardBox from "@/components/DashboardBox";
import ExpensesCategoryCharts from "@/components/ExpensesCategoryCharts";
import ProductList from "@/components/ProductList";
import RecentOrdersList from "@/components/RecentOrdersList";
import SummeryChart from "@/components/SummeryChart";

const Row3 = () => {

  return (
    <>
      <DashboardBox gridArea="g">
        <ProductList />
      </DashboardBox>
      <DashboardBox gridArea="h">
        <RecentOrdersList />
      </DashboardBox>
      <DashboardBox gridArea="i">
        <ExpensesCategoryCharts />
      </DashboardBox>
      <DashboardBox gridArea="j">
        <SummeryChart />
      </DashboardBox>
    </>
  );
};

export default Row3;
