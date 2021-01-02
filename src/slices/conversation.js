import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    people: [],
    conversationTime: 0
};

const conversationSlice = createSlice({
    name: 'conversationState',
    initialState,
    reducers: {
        addPerson: (state, { payload }) => {
            state.people.push(payload);
        }
    }
});

export const {
    addPerson
} = conversationSlice.actions;

export default conversationSlice.reducer;