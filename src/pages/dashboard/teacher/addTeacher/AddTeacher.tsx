import React, { useEffect } from "react";
import AddTeachers from "../../../../components/AddTeachers/AddTeachers";

const AddTeacher = () => {
  useEffect(() => {
    document.title = "Add teacher | Student Panel";
  }, []);
  return (
    <div>
      <AddTeachers />
    </div>
  );
};

export default React.memo(AddTeacher);
