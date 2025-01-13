import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// type TComponentSection = {
//   id: string;
//   name: string;
//   apiSection: string;
//   idxLang: string;
//   uniq: string;
//   secIndex: string;
// };

interface WebBuilderState {
  addSection: {
    index: number | null;
    folder_name?: string;
    sectionType: string;
  };
  idxContentLang: number;
  globalSave: boolean;
  isNavigation: boolean;
  isEditorFocused: boolean;
  activeSide: string | null;
  activeOptionSection: string | null;
  activeEditorComp: string;
  anchorElm: string | null; // Consider specifying a more precise type if possible
}

const initialState: WebBuilderState = {
  addSection: { index: null, folder_name: "", sectionType: "" },
  activeOptionSection: "",
  idxContentLang: 0,
  globalSave: false,
  isNavigation: true,
  isEditorFocused: false,
  activeSide: null,
  activeEditorComp: "",

  anchorElm: null,
};

const webBuilderSlice = createSlice({
  name: "webBuilder",
  initialState,
  reducers: {
    handleAddSection(
      state,
      action: PayloadAction<{
        addSection: {
          index: number | null;
          folder_name?: string;
          sectionType: string;
        };
      }>
    ) {
      state.addSection = action.payload.addSection;
    },
    handleActiveSide(
      state,
      action: PayloadAction<{
        id: string | null;
      }>
    ) {
      state.activeSide = action.payload.id;
    },
    handleNavigation(state) {
      state.isNavigation = !state.isNavigation;
    },
    handleContentLang(state, action: PayloadAction<number>) {
      state.idxContentLang = action.payload;
    },
    handleActiveOption(state, action: PayloadAction<string>) {
      state.activeOptionSection = action.payload;
    },
    handleGlobalSave(state, action: PayloadAction<boolean>) {
      state.globalSave = action.payload;
    },
    handleFocusedEditor(state, action: PayloadAction<boolean>) {
      state.isEditorFocused = action.payload;
    },
    handleActiveEditorComp(state, action: PayloadAction<string>) {
      state.activeEditorComp = action.payload;
    },

    handleAncorElm(state, action: PayloadAction<string | null>) {
      // Adjust the type for `any` to be more specific if possible
      state.anchorElm = action.payload;
    },
  },
});

export const {
  handleAddSection,
  handleActiveSide,
  handleContentLang,
  handleGlobalSave,
  handleNavigation,
  handleFocusedEditor,
  handleActiveEditorComp,
  handleAncorElm,
  handleActiveOption,
} = webBuilderSlice.actions;

export default webBuilderSlice.reducer;
