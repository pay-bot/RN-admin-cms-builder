import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isOpen: boolean;
}

interface LayoutState {
  sidebar: SidebarState;
  activeTabs: number;
  activeSide: string | null;
  activeHeader?: string;
}

const initialState: LayoutState = {
  sidebar: {
    isOpen: false,
  },
  activeTabs: 0,
  activeSide: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleSideBar: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
    handleCloseSideBar: (state) => {
      state.sidebar.isOpen = false;
    },
    setActiveHeader: (state, action: PayloadAction<string>) => {
      state.activeHeader = action.payload;
    },
    setActiveTabs: (state, action: PayloadAction<number>) => {
      state.activeTabs = action.payload;
    },
  },
});

export const {
  handleCloseSideBar,
  handleSideBar,
  setActiveHeader,
  setActiveTabs,
} = layoutSlice.actions;

export default layoutSlice.reducer;
