import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaBoxOpen,
  FaBookmark,
  FaShoppingCart,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Dashboard = () => {
  const location = useLocation();
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const isTeacherRoute = location.pathname.startsWith("/teacher");
  const nav = useNavigate();
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 h-screen bg-[#F0F9F4] text-gray-800 flex flex-col p-6 shadow-md">
        <div className="flex items-center justify-start mb-8 pl-2">
          <img
            onClick={() => nav("")}
            src="https://www.greyb.com/wp-content/uploads/2023/01/logo_of_chonnam_national_university.svg_.png"
            alt="Logo"
            width={154}
            height={36}
            className="object-contain select-none "
          />
        </div>

        <nav className="flex flex-col gap-3">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#A0D9C4] "
                  : "hover:bg-[#D2F1E5] hover:text-gray-900"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/student"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#A0D9C4] "
                  : "hover:bg-[#D2F1E5] hover:text-gray-900"
              }`
            }
          >
            <FaUserGraduate />
            Students
          </NavLink>

          <div>
            <button
              onClick={() => setIsTeacherOpen(!isTeacherOpen)}
              className={`flex items-center justify-between w-full gap-3 px-4 py-2 rounded-md font-medium transition ${
                isTeacherRoute
                  ? "bg-[#A0D9C4]"
                  : "hover:bg-[#D2F1E5] hover:text-gray-900"
              }`}
            >
              <span className="flex items-center gap-3">
                <FaChalkboardTeacher />
                Teachers
              </span>
              {isTeacherOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>

            {isTeacherOpen && (
              <div className="ml-8 mt-2 flex flex-col gap-2">
                <NavLink
                  to="/teacher/all_teacher"
                  className={({ isActive }) =>
                    `px-2 py-1 rounded hover:bg-[#D2F1E5] transition ${
                      isActive ? "text-[#16A085] font-semibold" : ""
                    }`
                  }
                >
                  All Teacher
                </NavLink>
                <NavLink
                  to="/teacher/add_teacher"
                  className={({ isActive }) =>
                    `px-2 py-1 rounded hover:bg-[#D2F1E5] transition ${
                      isActive ? "text-[#16A085] font-semibold" : ""
                    }`
                  }
                >
                  Add Teachers
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#A0D9C4]"
                  : "hover:bg-[#D2F1E5] hover:text-gray-900"
              }`
            }
          >
            <FaBoxOpen />
            Products
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col bg-[#F8FBFA]">
        <header className="bg-[#E6F4EF] shadow p-4 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16A085] bg-white"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          <div className="flex items-center gap-4 ml-4">
            <FaBookmark className="text-xl text-gray-600 hover:text-[#16A085] cursor-pointer transition" />
            <FaShoppingCart className="text-xl text-gray-600 hover:text-[#16A085] cursor-pointer transition" />
            <button className="bg-[#16A085] hover:bg-[#12806C] text-white px-4 py-1.5 rounded transition">
              Sign In
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
