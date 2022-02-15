import * as types from './types';
export const loadDevs = (dispatch) => {
    console.log('Carregando devs');
    const storage = JSON.parse(localStorage.getItem('devs'));
    dispatch({ type: types.LOAD_DEV, payload: storage });
};

export const addDevs = async (dispatch, values) => {
    console.log(values.name);
    localStorage.setItem('devs', JSON.stringify([{ name: values.name, id: Date.now() }]));
    dispatch({ type: types.ADD_DEV });
};
