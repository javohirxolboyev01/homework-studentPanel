import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <div className="pl-4 md:pl-10 flex gap-x-10 border-b mb-6">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `pb-2 text-sm font-medium ${
              isActive
                ? "text-[#46987a] border-b-2 border-[#46987a]"
                : "text-gray-600"
            }`
          }
        >
          Student List
        </NavLink>
        <NavLink
          to="student_data"
          className={({ isActive }) =>
            `pb-2 text-sm font-medium ${
              isActive
                ? "text-[#46987a] border-b-2 border-[#46987a]"
                : "text-gray-600"
            }`
          }
        >
          Student Data
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default React.memo(Students);
