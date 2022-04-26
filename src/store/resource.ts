import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { IResource } from './interface';

export type resourceType = {
  list: IResource[];
  viewUrl: string;
  headerViewUrl: string;
};

const tempData = [
  {
    id: 1,
    originImgUrl: 'https://www.youtube.com/embed/xDMP3i36naA',
    inputUrl: 'https://www.youtube.com/embed/xDMP3i36naA',
  },
  {
    id: 2,
    originImgUrl:
      'https://image.ohou.se/i/bucketplace-v2-development/uploads%2Fadvices%2Fphotos%2F1448849450628_UzKYBJR.jpg?gif=1&w=720',
    inputUrl:
      'https://image.ohou.se/i/bucketplace-v2-development/uploads%2Fadvices%2Fphotos%2F1448849450628_UzKYBJR.jpg?gif=1&w=720',
  },
  {
    id: 3,
    originImgUrl: 'https://www.robinwieruch.de/react-libraries/',
    inputUrl: 'https://www.robinwieruch.de/react-libraries/',
  },
];

const initialState: resourceType = {
  list: tempData,
  viewUrl: tempData[2].originImgUrl,
  headerViewUrl: tempData[2].inputUrl,
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
      if (idx !== -1) state.list[idx].inputUrl = value;
    },
    setViewUrl: (state, action) => {
      state.viewUrl = action.payload;
    },
    setHeaderViewUrl: (state, action) => {
      state.headerViewUrl = action.payload;
    },
  },
});

export const { addList, deleteList, setList, setViewUrl, setHeaderViewUrl } = resourceSlice.actions;

export const selectResource = (state: RootState) => state.resource;

export default resourceSlice.reducer;
