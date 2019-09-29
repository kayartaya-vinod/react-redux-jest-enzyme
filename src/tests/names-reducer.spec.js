import { namesReducer } from '../reducers/names-reducer';
import { VIEW_NAMES, ADD_NAME, DELETE_NAME } from '../actions/types';

describe('names-reducer tests', () => {

    it('should handle VIEW_NAMES action', () => {
        const initialState = {
            names: ['Amar', 'Akbar', 'Antony']
        };
        const state = namesReducer(initialState, { type: VIEW_NAMES });
        expect(state.names).toBeDefined();
        expect(state.names.length).toBe(3);
    });

    it('should handle ADD_NAME action', () => {
        const initialState = {
            names: ['Amar', 'Akbar', 'Antony']
        };
        const state = namesReducer(initialState, { type: ADD_NAME, name: 'Vinod' });
        expect(state.names).toBeDefined();
        expect(state.names.length).toBe(4);
    });

    it('should handle DELETE_NAME action', () => {
        const initialState = {
            names: ['Amar', 'Akbar', 'Antony']
        };
        const state = namesReducer(initialState, { type:  DELETE_NAME, name: 'Akbar' });
        expect(state.names).toBeDefined();
        expect(state.names.length).toBe(2);
    });

    

});