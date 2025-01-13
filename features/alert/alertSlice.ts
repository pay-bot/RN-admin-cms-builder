import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  isOpen?: boolean;
  alertId?: string;
  componentName?: string;
}

const initialState: AlertState = {
  isOpen: false,
  alertId: undefined,
  componentName: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    handleCloseAlert: (state) => {
      const currState = state;
      currState.isOpen = false;
      currState.alertId = undefined;
      currState.componentName = '';
    },
    handleOpenAlert: (state, action: PayloadAction<AlertState>) => {
      const currState = state;
      currState.isOpen = true;
      currState.alertId = action.payload.alertId;
      currState.componentName = action.payload.componentName;
    },
  },
});

export const { handleCloseAlert, handleOpenAlert } = alertSlice.actions;

export default alertSlice.reducer;
