import reducer, { 
    initialState,
    addPerson
} from '@Slices/conversation';

describe('Conversation slice', () => {
    test('Initial State', () => {
        const nextState = initialState;
        const action = {}
        const result = reducer(undefined, action)

        expect(result).toEqual(nextState)
    });

    test('Add Person', () => {
        const newPerson = { name: "Dave", timeSpoken: 0 };

        const nextState = { ...initialState, people : [newPerson] };
        const action = addPerson(newPerson);
        const result = reducer(undefined, action);

        expect(result).toEqual(nextState);
    });
});