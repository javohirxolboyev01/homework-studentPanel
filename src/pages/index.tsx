import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Students = lazy(() => import("./dashboard/students/Students"));
const Products = lazy(() => import("./dashboard/products/Products"));
const TableList = lazy(() => import("./dashboard/table list/TableList"));
const Home = lazy(() => import("./dashboard/home/Home"));
const StudentForm = lazy(() => import("./dashboard/students/StudentForm"));
const StudentData = lazy(() => import("./dashboard/students/StudentData"));

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "student",
          element: <Students />,
          children: [
            { path: "", element: <StudentForm /> },
            { path: "student_data", element: <StudentData /> },
          ],
        },
        { path: "product", element: <Products /> },
        { path: "teacher", element: <TableList /> },
      ],
    },
  ]);
};

export default React.memo(MainRoute);
