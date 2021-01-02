import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    people: [ { name: "John", timeSpoken: 3000 }, { name: "Steve", timeSpoken: 2000 } ],
    conversationTime: 0
};

const conversationSlice = createSlice({
    name: 'conversationState',
    initialState: initialState,
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