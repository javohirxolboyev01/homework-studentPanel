import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "../../types";



interface StudentState {
  editStudent: Student | null;
}

const initialState: StudentState = {
  editStudent: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setEditStudent: (state, action: PayloadAction<Student>) => {
      state.editStudent = action.payload;
    },
    clearEditStudent: (state) => {
      state.editStudent = null;
    },
  },
});

export const { setEditStudent, clearEditStudent } = studentSlice.actions;
export default studentSlice.reducer;
