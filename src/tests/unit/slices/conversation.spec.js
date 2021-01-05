import reducer, { 
    initialState,
    addPerson,
    startConversation,
    stopConversation,
    editPerson
} from '@Slices/conversation';

describe('Conversation slice', () => {
    test('Initial State', () => {
        const nextState = initialState;
        const action = {}
        const result = reducer(undefined, action)

        expect(result).toEqual(nextState)
    });

    test('Add Person', () => {
        const newPerson = { name: "Dave", timeSpoken: 0, isTalking: false };

        const nextState = { ...initialState, people : [newPerson] };
        const action = addPerson(newPerson);
        const result = reducer(undefined, action);

        expect(result).toEqual(nextState);
    });

    test('Start Conversation', () => {
        const nextState = { ...initialState, activeConversation: true };
        const action = startConversation;
        const result = reducer(undefined, action);

        expect(result).toEqual(nextState);
    })

    test('Stop Conversation', () => {
        const nextState = { ...initialState, activeConversation: false };
        const action = stopConversation;
        const result = reducer(undefined, action);

        expect(result).toEqual(nextState);
    })

    test('Edit User', () => {
        const originalPerson = { name: "John", timeSpoken: 0, isTalking: false, id: 0 };
        const editedPerson = { name: "Dave", timeSpoken: 0, isTalking: false, id: 0 };
        const nextState = { ...initialState, people: [editedPerson], activeConversation: false };

        const initialStateAfterAdd = {
            ...initialState,
            people: [originalPerson]
        }

        const action = editPerson(editedPerson);
        const result = reducer(initialStateAfterAdd, action);

        expect(result).toEqual(nextState);
    })
});