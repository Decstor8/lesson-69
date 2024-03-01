import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    searchTerm: string;
    searchResults: string[];
}

const initialState: SearchState = {
    searchTerm: '',
    searchResults: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setSearchResults(state, action: PayloadAction<any[]>) {
            state.searchResults = action.payload;
        },
    },
});

export const { setSearchTerm, setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
