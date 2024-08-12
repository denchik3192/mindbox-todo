import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    filter: 'all' | 'active' | 'completed';
}

const initialState: IInitialState = {
    filter: 'all',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload
        },

    },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
