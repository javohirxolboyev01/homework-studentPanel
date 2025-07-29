import React, { useEffect } from "react";
import DashboardItem from "../../../components/DashboardItem/DashboardItem";

const Home = () => {
  useEffect(() => {
    document.title = "Home |  Student Panel";
  }, []);
  return (
    <div>
      <DashboardItem />
    </div>
  );
};

export default React.memo(Home);
