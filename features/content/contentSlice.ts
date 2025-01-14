import { reduxStorage } from "@/store/storage";
import { TIdAndName } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContentState {
  activeTemplate: string;
  activeSite: string;
}

const initialState: ContentState = {
  activeTemplate: reduxStorage.getItem("bzaTemplate") || "",
  activeSite: reduxStorage.getItem("bzaSite") || "",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    getActiveSiteDetail: (
      state,
      action: PayloadAction<{
        id: string;
        templates: TIdAndName[];
      }>
    ) => {
      const TemplateId = action.payload.templates[0]?.id;
      reduxStorage.setItem("bzaTemplate", TemplateId);
      if (!state.activeTemplate) state.activeTemplate = TemplateId;
      const SiteId = action.payload.id;
      reduxStorage.setItem("bzaSite", SiteId);
      if (!state.activeSite) state.activeSite = SiteId;
    },
    setActiveTemplate: (state, action: PayloadAction<string>) => {
      const TemplateId = action.payload;
      reduxStorage.setItem("bzaTemplate", TemplateId);
      state.activeTemplate = TemplateId;
    },
    setActiveSite: (state, action: PayloadAction<string>) => {
      const SiteId = action.payload;
      reduxStorage.setItem("bzaSite", SiteId);
      state.activeSite = SiteId;
    },
  },
});

export const contentActions = contentSlice.actions;
export default contentSlice.reducer;
