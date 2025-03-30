import React from "react";
import { useSession } from "../SessionContext";
import StoreCartContainer from "../components/StoreCartContainer";
import AddStore from "../components/AddStore";

const Dashboard = () => {
  const sesion = useSession([]);

  return (
    <div className="h-full ">
      <AddStore />
      <div className="grid grid-cols-[repeat(auto-fill,16rem)] justify-evenly gap-3">
        <StoreCartContainer />
      </div>
    </div>
  );
};

export default Dashboard;
