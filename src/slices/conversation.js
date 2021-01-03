import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    people: [],
    conversationTime: 0,
    activeConversation: false
};

const conversationSlice = createSlice({
    name: 'conversationState',
    initialState,
    reducers: {
        addPerson: (state, { payload }) => {
            state.people.push(payload);
        },
        startConversation: (state) => {
            state.activeConversation = true;
        },
        stopConversation: (state) => {
            state.activeConversation = false;
        },
        updateSpeakingTime: (state) => {
            state.conversationTime += 500;
            state = { ...state, people: state.people.map((person) => {
                if(person.isTalking)
                    return { ...person, timeSpoken: person.timeSpoken += 500 };

                return { ...person };
            })}
            console.log(state);
        }
    }
});

export const {
    addPerson,
    startConversation,
    updateSpeakingTime,
    stopConversation
} = conversationSlice.actions;

export default conversationSlice.reducer;