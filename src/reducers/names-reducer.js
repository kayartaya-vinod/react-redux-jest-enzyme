import { VIEW_NAMES, ADD_NAME, DELETE_NAME } from "../actions/types";

const initialState = {
    names: ['Vinod', 'Shyam', 'John', 'Jane']
};

export const namesReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_NAMES:
            return { ...state };
        case ADD_NAME:
            return { names: [...state.names, action.name] };
        case DELETE_NAME:
            let { names } = state;
            let index = names.findIndex(name => name === action.name);
            names.splice(index, 1);
            return { names: [...names] };
        default:
            return { ...state };
    }
}