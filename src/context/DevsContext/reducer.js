import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOAD_DEV:
            return { ...state, devs: action.payload, error: false };
        case types.ADD_DEV:
            console.log('Adicionado devs');
            return { ...state, error: false };
        case types.ERROR_DEV:
            console.log('erro devs');
            return { ...state, error: true };
    }
    return { ...state, error: false };
};
