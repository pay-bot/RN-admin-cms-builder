import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isOpen?: boolean;
  modalId?: string;
  componentName?: string;
}

const initialState: ModalState = {
  isOpen: false,
  modalId: undefined,
  componentName: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleCloseModal: (state) => {
      const currState = state;
      currState.isOpen = false;
      currState.modalId = undefined;
      currState.componentName = '';
    },
    handleOpenModal: (state, action: PayloadAction<ModalState>) => {
      const currState = state;
      currState.isOpen = true;
      currState.modalId = action.payload.modalId;
      currState.componentName = action.payload.componentName;
    },
  },
});

export const { handleCloseModal, handleOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
