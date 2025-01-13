import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAssetBuilder } from '@/types';

type TassetSelectionSlice = { selected: IAssetBuilder[] };

const initialState: TassetSelectionSlice = {
  selected: [],
};

const assetSelectionSlice = createSlice({
  name: 'assetSelection',
  initialState,
  reducers: {
    handleSelect: (state, action: PayloadAction<string>) => {
      try {
        const newAsset: IAssetBuilder = JSON.parse(action.payload);
        state.selected.push(newAsset);
      } catch (error) {
        console.error('Failed to parse JSON payload for handleSelect:', error);
      }
    },
    handleUnSelect: (state, action: PayloadAction<string>) => {
      try {
        const parsedPayload = JSON.parse(action.payload);
        const assetIdToRemove = parsedPayload.id.toString();
        state.selected = state.selected.filter(
          (asset) => asset.id.toString() !== assetIdToRemove
        );
      } catch (error) {
        console.error(
          'Failed to parse JSON payload for handleUnSelect:',
          error
        );
      }
    },
    handleSelectSingle: (state, action: PayloadAction<string>) => {
      try {
        const newAsset: IAssetBuilder = JSON.parse(action.payload);
        state.selected = [newAsset];
      } catch (error) {
        console.error('Failed to parse JSON payload for handleSelect:', error);
      }
    },
    resetAssetSelection: (state) => {
      state.selected = [];
    },
  },
});

export const {
  handleSelect,
  handleUnSelect,
  handleSelectSingle,
  resetAssetSelection,
} = assetSelectionSlice.actions;

export default assetSelectionSlice.reducer;
