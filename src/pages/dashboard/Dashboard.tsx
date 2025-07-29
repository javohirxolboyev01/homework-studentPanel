import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaBoxOpen,
  FaBookmark,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Dashboard = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isTeacherRoute = location.pathname.startsWith("/teacher");

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#F0F9F4] text-gray-800 shadow-md p-6 transition-transform duration-300 transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <img
            onClick={() => {
              nav("");
              setSidebarOpen(false);
            }}
            src="https://www.greyb.com/wp-content/uploads/2023/01/logo_of_chonnam_national_university.svg_.png"
            alt="Logo"
            width={154}
            height={36}
            className="object-contain select-none cursor-pointer"
          />
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes className="text-xl text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          <NavLink
            to=""
            end
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive ? "bg-[#A0D9C4]" : "hover:bg-[#D2F1E5]"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/student"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive ? "bg-[#A0D9C4]" : "hover:bg-[#D2F1E5]"
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
                isTeacherRoute ? "bg-[#A0D9C4]" : "hover:bg-[#D2F1E5]"
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
                  onClick={() => setSidebarOpen(false)}
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
                  onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                isActive ? "bg-[#A0D9C4]" : "hover:bg-[#D2F1E5]"
              }`
            }
          >
            <FaBoxOpen />
            Products
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col bg-[#F8FBFA]">
        <header className="bg-[#E6F4EF] shadow p-4 md:px-8 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <div className="relative flex-1 min-w-[200px] max-w-md w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16A085] bg-white"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          <div className="flex items-center gap-3 shrink-0 mt-3 md:mt-0">
            <FaBookmark className="text-xl text-gray-600 hover:text-[#16A085] cursor-pointer" />
            <FaShoppingCart className="text-xl text-gray-600 hover:text-[#16A085] cursor-pointer" />
            <button className="bg-[#16A085] hover:bg-[#12806C] text-white px-4 py-1.5 rounded transition">
              Sign In
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="container mx-auto max-w-screen-xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
