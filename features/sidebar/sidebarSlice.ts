import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SidebarState {
  isOpen: boolean;
  activeTabs: number;
  activeSide: string | null;
  componentSection: React.ReactNode;
  webBuilderMode: boolean;
  addSection: number | null;
}

export type TSidebartate = SidebarState;

const initialState: SidebarState = {
  isOpen: true,
  activeTabs: 0,
  activeSide: null,
  componentSection: null,
  webBuilderMode: false,
  addSection: null,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    handleActiveSide: (
      state,
      action: PayloadAction<{
        id: string | null;
        componentSection: React.ReactNode;
      }>
    ) => {
      state.activeSide = action.payload.id;
      state.componentSection = action.payload.componentSection;
    },
    handleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
    handleBuilderMode: (state) => {
      state.isOpen = false;
    },
    handleCloseSideBar: (state) => {
      state.isOpen = false;
    },

    setActiveTabs: (state, action: PayloadAction<number>) => {
      state.activeTabs = action.payload;
    },
  },
});

export const {
  handleCloseSideBar,
  handleActiveSide,
  handleSideBar,
  handleBuilderMode,
  setActiveTabs,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
