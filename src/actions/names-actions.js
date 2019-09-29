import { ADD_NAME, VIEW_NAMES, DELETE_NAME } from "./types"

export const addName = (name) => (dispatch) => {
    dispatch({
        type: ADD_NAME,
        name
    });
};

export const viewNames = () => (dispatch) => {
    dispatch({
        type: VIEW_NAMES
    });
};

export const deleteName = (name) => (dispatch) => {
    dispatch({
        type: DELETE_NAME,
        name
    });
};
