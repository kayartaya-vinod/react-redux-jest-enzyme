import { addName, viewNames, deleteName } from '../actions/names-actions';
import { ADD_NAME, VIEW_NAMES, DELETE_NAME } from '../actions/types';

describe('names-actions tests', () => {

    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn();
    })

    it('should test addName()', () => {
        addName('Vinod')(dispatch);
        expect(dispatch).toBeCalledWith({ type: ADD_NAME, name: 'Vinod' });
    });

    it('should test viewNames()', () => {
        viewNames()(dispatch);
        expect(dispatch).toBeCalledWith({ type: VIEW_NAMES });
    });

    it('should test deleteName()', () => {
        deleteName('Vinod')(dispatch);
        expect(dispatch).toBeCalledWith({ type: DELETE_NAME, name: 'Vinod' });
    });
});