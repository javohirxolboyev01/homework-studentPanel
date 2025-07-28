import React from "react";
import { Outlet } from "react-router-dom";

const Teacher = () => {
  return (
    <div>
      <main className="flex-1 p-6 overflow-y-auto bg-[#F8FBFA]">
        <Outlet />
      </main>
    </div>
  );
};

export default React.memo(Teacher);
