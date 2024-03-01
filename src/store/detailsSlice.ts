import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Show } from '../types';

export interface ShowDetailsState {
    show: Show | null;
    loading: boolean;
    error: string | null;
}

const initialState: ShowDetailsState = {
    show: null,
    loading: false,
    error: null,
};

export const fetchShowDetails = createAsyncThunk(
    'showDetails/fetchShowDetails',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue('Не удалось получить сведения о фильме');
        }
    }
);


const detailsSlice = createSlice({
    name: 'showDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShowDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShowDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.show = action.payload;
            })
            .addCase(fetchShowDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const selectShowDetails = (state: RootState) => state.showDetails;
export default detailsSlice.reducer;
