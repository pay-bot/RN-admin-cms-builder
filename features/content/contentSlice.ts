import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TIdAndName } from "@/types";
import { Storage } from "@/state/cache";

interface ContentState {
  activeTemplate: string;
  activeSite: string;
}

const initialState: ContentState = {
  activeTemplate: Storage.getString("bzaTemplate") || "",
  activeSite: Storage.getString("bzaSite") || "",
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
      Storage.set("bzaTemplate", TemplateId);
      if (!state.activeTemplate) state.activeTemplate = TemplateId;
      const SiteId = action.payload.id;
      Storage.set("bzaSite", SiteId);
      if (!state.activeSite) state.activeSite = SiteId;
    },
    setActiveTemplate: (state, action: PayloadAction<string>) => {
      const TemplateId = action.payload;
      Storage.set("bzaTemplate", TemplateId);
      state.activeTemplate = TemplateId;
    },
    setActiveSite: (state, action: PayloadAction<string>) => {
      const SiteId = action.payload;
      Storage.set("bzaSite", SiteId);
      state.activeSite = SiteId;
    },
  },
});

export const contentActions = contentSlice.actions;
export default contentSlice.reducer;
