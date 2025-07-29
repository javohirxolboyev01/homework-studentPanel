import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Students = () => {
  useEffect(() => {
    document.title = "Student | Student Panel";
  }, []);

  return (
    <div>
      <div className="pl-4 md:pl-10 flex gap-x-4 md:gap-x-10 border-b mb-6 text-sm md:text-base whitespace-nowrap overflow-x-auto">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `pb-2 font-medium transition ${
              isActive
                ? "text-[#46987a] border-b-2 border-[#46987a]"
                : "text-gray-600 hover:text-[#46987a]"
            }`
          }
        >
          Student List
        </NavLink>
        <NavLink
          to="student_data"
          className={({ isActive }) =>
            `pb-2 font-medium transition ${
              isActive
                ? "text-[#46987a] border-b-2 border-[#46987a]"
                : "text-gray-600 hover:text-[#46987a]"
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
