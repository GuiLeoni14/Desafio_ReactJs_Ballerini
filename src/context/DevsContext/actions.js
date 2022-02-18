import * as types from './types';
export const loadDevs = (dispatch) => {
    console.log('Carregando devs');
    const storage = JSON.parse(localStorage.getItem('devs'));
    dispatch({ type: types.LOAD_DEV, payload: storage });
};

export const addDevs = async (dispatch, values) => {
    console.log(values.name);
    const data = await getStatusForGitHub(values.github);
    console.log(data);
    const beforeStorage = JSON.parse(localStorage?.getItem('devs'));
    localStorage.setItem(
        'devs',
        JSON.stringify([
            ...beforeStorage,
            {
                name: values.name,
                cargo: values.cargo,
                github: data.html_url,
                avatar: data.avatar_url,
                linkedin: values.linkedin,
                id: Date.now(),
            },
        ]),
    );
    loadDevs(dispatch);
    dispatch({ type: types.ADD_DEV });
};

export const deleteDevs = (dispatch, id) => {
    const beforeStorage = JSON.parse(localStorage.getItem('devs'));
    const afterDevs = beforeStorage.filter((dev) => dev.id != id);
    localStorage.setItem('devs', JSON.stringify(afterDevs));
    loadDevs(dispatch);
    dispatch({ type: types.DELETE_DEV, payload: afterDevs });
};

export const getStatusForGitHub = async (userName) => {
    console.log(userName);
    return fetch(`https://api.github.com/users/${userName}`)
        .then((resp) => resp.json())
        .then((data) => data);
};
