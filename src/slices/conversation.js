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
            payload.id = state.people.length;
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
                    person.timeSpoken += 500

                return person;
            })}
        },
        toggleTalking: (state, { payload }) => {
            state = { ...state, people: state.people.map((person) => {
                if(person.id == payload.id)
                    person.isTalking = !person.isTalking;

                return person;
            })}
        },
        editPerson: (state, { payload }) => {
            state = { ...state, people: state.people.map((person) => {
                if(person.id == payload.id)
                    person.name = payload.name;

                return person;
            })}
        }
    }
});

export const {
    addPerson,
    startConversation,
    updateSpeakingTime,
    stopConversation,
    toggleTalking,
    editPerson
} = conversationSlice.actions;

export default conversationSlice.reducer;