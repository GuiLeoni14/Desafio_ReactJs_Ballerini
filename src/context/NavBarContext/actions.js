import * as types from './types';
export const changeSearch = (dispatch) => {
    dispatch({ type: types.VISIBLE, payload: true });
};
export const removeSearch = (dispatch) => {
    dispatch({ type: types.REMOVE_VISIBLE, payload: false });
};
export const devSearch = (dispatch, values) => {
    if (!values[0]) {
        dispatch({ type: types.SEARCH, payload: [{ name: 'sem' }] });
        console.log('setanto...');
        return;
    }
    dispatch({ type: types.SEARCH, payload: values });
};
