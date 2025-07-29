import React, { useEffect } from "react";

const ActiveTeacher = () => {
  useEffect(() => {
    document.title = "All teacher | Student Panel";
  }, []);
  return (
    <div>
      <h3>All Teacher</h3>
    </div>
  );
};

export default React.memo(ActiveTeacher);
