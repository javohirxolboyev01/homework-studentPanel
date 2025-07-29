import React, { type FC } from "react";
import StudentDatas from "../../../components/StudentDatas/StudentDatas";

const StudentData: FC = () => {
  return (
    <div>
      <StudentDatas />
    </div>
  );
};

export default React.memo(StudentData);
