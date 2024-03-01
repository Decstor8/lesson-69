import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Show {
  id: number;
  name: string;
}

interface ShowsState {
  shows: Show[];
  query: string;
  currentShow: any;
  loading: boolean;
  error: string | null;
}

const initialState: ShowsState = {
  shows: [],
  query: "",
  currentShow: null,
  loading: false,
  error: null,
};
export const getShowsByQuery = createAsyncThunk<void, { query: string }>(
  "shows/getShowsByQuery",
  async ({ query }, { dispatch }) => {
    try {
      dispatch(setQueryParams(query));
      const data = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      const dataJson = await data.json();
      dispatch(setShows(dataJson));
    } catch (error) {
      console.error('Error');
    }
  }
);
export const getShowsById = createAsyncThunk<void, { id: string | undefined }>(
  "shows/getShowsByQuery",
  async ({ id }, { dispatch }) => {
    try {
      const data = await fetch(`http://api.tvmaze.com/shows/${id}`);
      const dataJson = await data.json();
      dispatch(setCurenShow(dataJson));
    } catch (error) {
      console.error('Error');
    }
  }
);
const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setShows(state, action: PayloadAction<Show[]>) {
      state.shows = action.payload;
    },
    setCurenShow(state, action: PayloadAction<Show>) {
      state.currentShow = action.payload;
    },
    setQueryParams(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});
export const { setShows, setQueryParams, setCurenShow } = showsSlice.actions;

export default showsSlice.reducer;
