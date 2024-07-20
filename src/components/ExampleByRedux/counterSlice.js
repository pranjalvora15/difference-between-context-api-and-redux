import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countA: 0,
    countB: 0,
    countC: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log(action);
            state[action.payload] += 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
