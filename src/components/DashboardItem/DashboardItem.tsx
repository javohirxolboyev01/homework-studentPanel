import React from "react";

import StudentGrowthChart from "../chart/StudentGrowthChart";
import CoursePopularityChart from "../chart/CoursePopularityChart";
import { MdBarChart, MdShowChart } from "react-icons/md";

const DashboardItem = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">환영합니다, Javohir 님</h2>
          <p className="text-sm text-gray-500">
            실시간으로 학생 활동을 추적하세요
          </p>
        </div>
        {/* <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <AiOutlinePlus className="mr-2" />
          학생 추가
        </button> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="총 학생 수" count="1,250" growth="↑ 8%" positive />
        <Card title="총 강의 수" count="320" growth="↓ 2%" />
        <Card title="오늘 활동한 학생" count="130" growth="↑ 5%" positive />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <MdShowChart className="text-blue-600 text-2xl" />
            학생 증가율
          </h3>
          <StudentGrowthChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <MdBarChart className="text-green-600 text-2xl" />
            인기 강의
          </h3>
          <CoursePopularityChart />
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  count,
  growth,
  positive = false,
}: {
  title: string;
  count: string;
  growth: string;
  positive?: boolean;
}) => (
  <div className="bg-white rounded p-4 shadow flex flex-col">
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-2xl font-bold mt-2">{count}</p>
    <span
      className={`text-sm mt-1 ${positive ? "text-green-500" : "text-red-500"}`}
    >
      {growth} 지난 달 대비
    </span>
  </div>
);

export default React.memo(DashboardItem);
