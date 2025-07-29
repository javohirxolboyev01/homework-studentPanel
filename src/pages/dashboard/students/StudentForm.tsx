import React from "react";

import StudentForms from "../../../components/StudentForms/StudentForms";

const StudentForm = () => {
  return (
    <div>
      <StudentForms />
    </div>
  );
};

export default React.memo(StudentForm);
