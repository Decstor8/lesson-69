// app/store.ts

import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import searchReducer from '../store/searchSlice';
import showsReducer from '../store/showsSlice'; // Добавленный срез shows
import showDetailsReducer from '../store/detailsSlice';

export const store = configureStore({
   reducer: {
      search: searchReducer,
      shows: showsReducer, // Добавляем новый срез shows
      showDetails: showDetailsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;