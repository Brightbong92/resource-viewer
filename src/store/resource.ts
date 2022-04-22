import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { IResource } from './interface';

export type resourceType = {
  list: IResource[];
  viewUrl: string;
  viewUrlVisible: boolean;
};

const initialState: resourceType = {
  list: [],
  viewUrl: '',
  viewUrlVisible: false,
};

export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteList: (state, action) => {
      state.list = state.list?.filter((v) => v.id !== action.payload);
    },
    setList: (state, action) => {
      const { id, value } = action.payload;
      const idx = state.list.findIndex((v) => v.id === id);
      if (idx !== -1) state.list[idx].imgUrl = value;
    },
    setViewUrl: (state, action) => {
      state.viewUrl = action.payload;
    },
    setViewUrlVisible: (state, action) => {
      state.viewUrlVisible = action.payload;
    },
  },
});

export const { addList, deleteList, setList, setViewUrl, setViewUrlVisible } =
  resourceSlice.actions;

export const selectResource = (state: RootState) => state.resource;

export default resourceSlice.reducer;
