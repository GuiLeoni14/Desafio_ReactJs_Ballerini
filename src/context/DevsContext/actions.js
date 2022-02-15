import * as types from './types';
export const loadDevs = (dispatch) => {
    console.log('Carregando devs');
    const storage = JSON.parse(localStorage.getItem('devs'));
    dispatch({ type: types.LOAD_DEV, payload: storage });
};

export const addDevs = (dispatch) => {
    localStorage.setItem(
        'devs',
        JSON.stringify([
            { name: 'dev1', id: Date.now() },
            { name: 'dev2', id: Date.now() },
        ]),
    );
    dispatch({ type: types.ADD_DEV });
};
