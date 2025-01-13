import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DrawerState {
  isOpen?: boolean;
  drawerId?: string;
  componentName?: string;
}

const initialState: DrawerState = {
  isOpen: false,
  drawerId: undefined,
  componentName: '',
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    handleCloseDrawer: (state) => {
      const currState = state;
      currState.isOpen = false;
      currState.drawerId = undefined;
      currState.componentName = '';
    },
    handleOpenDrawer: (state, action: PayloadAction<DrawerState>) => {
      const currState = state;
      currState.isOpen = true;
      currState.drawerId = action.payload.drawerId;
      currState.componentName = action.payload.componentName;
    },
  },
});

export const { handleCloseDrawer, handleOpenDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
