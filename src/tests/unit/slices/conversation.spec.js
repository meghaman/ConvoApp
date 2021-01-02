import reducer, { 
    initialState
} from '@Slices/conversation';

describe('Conversation slice', () => {
    test('should return initial state on first run', () => {
        const nextState = initialState;
        const action = {}
        const result = reducer(undefined, action)

        expect(nextState).toEqual(result)
    });
});