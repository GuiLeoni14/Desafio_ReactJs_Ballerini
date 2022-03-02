import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.VISIBLE:
            return { ...state, visible: action.payload };
        case types.REMOVE_VISIBLE:
            return { ...state, visible: action.payload };
        case types.SEARCH:
            return { ...state, devResultSearch: action.payload };
    }
    return { ...state };
};
