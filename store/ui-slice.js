import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: {
    modalState: false,
    modalTypeState: "dropIn",
  },
  reducers: {
    openModal(state) {
      state.modalState = true;
    },

    closeModal(state) {
      state.modalState = false;
    },

    setModalType(state, action) {
      state.modalTypeState = action.payload;
    },
  },
});

export default UiSlice;
