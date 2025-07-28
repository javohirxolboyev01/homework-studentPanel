import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Students = lazy(() => import("./dashboard/students/Students"));
const Teacher = lazy(() => import("./dashboard/teacher/Teacher"));
const Home = lazy(() => import("./dashboard/home/Home"));
const StudentData = lazy(() => import("./dashboard/students/StudentData"));
const StudentForm = lazy(() => import("./dashboard/students/StudentForm"));
const Product = lazy(() => import("./dashboard/product/Product"));
const AllTeacher = lazy(
  () => import("./dashboard/teacher/AllTacher/AllTeacher")
);
const AddTeacher = lazy(
  () => import("./dashboard/teacher/addTeacher/AddTeacher")
);

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
        {
          path: "teacher",
          element: <Teacher />,
          children: [
            { path: "all_teacher", element: <AllTeacher /> },
            { path: "add_teacher", element: <AddTeacher /> },
          ],
        },
        { path: "product", element: <Product /> },
      ],
    },
  ]);
};

export default React.memo(MainRoute);
