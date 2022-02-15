import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOAD_DEV:
            return { ...state, devs: action.payload };
        case types.ADD_DEV:
            console.log('Adicionado devs');
            return { ...state };
    }
    return { ...state };
};
