import * as types from './types';
export const loadDevs = (dispatch) => {
    try {
        const storage = JSON.parse(localStorage.getItem('devs'));
        dispatch({ type: types.LOAD_DEV, payload: storage });
    } catch {
        dispatch({ type: types.ERROR_DEV });
    }
};

export const addDevs = async (dispatch, values) => {
    try {
        const data = await getStatusForGitHub(values.github);
        const beforeStorage = JSON.parse(localStorage?.getItem('devs'));
        if (beforeStorage) {
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
        } else {
            localStorage.setItem(
                'devs',
                JSON.stringify([
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
        }
        loadDevs(dispatch);
        dispatch({ type: types.ADD_DEV });
    } catch {
        dispatch({ type: types.ERROR_DEV });
    }
};

export const deleteDevs = (dispatch, id) => {
    try {
        const beforeStorage = JSON.parse(localStorage.getItem('devs'));
        const afterDevs = beforeStorage.filter((dev) => dev.id != id);
        localStorage.setItem('devs', JSON.stringify(afterDevs));
        loadDevs(dispatch);
        dispatch({ type: types.DELETE_DEV, payload: afterDevs });
    } catch {
        dispatch({ type: types.ERROR_DEV });
    }
};

export const editDevs = (dispatch, values) => {
    try {
        const beforeStorage = JSON.parse(localStorage.getItem('devs'));
        const newStorage = beforeStorage.filter((item) => item.id != values.id);
        localStorage.setItem('devs', JSON.stringify([...newStorage, values]));
        loadDevs(dispatch);
        const afterDevs = JSON.parse(localStorage.getItem('devs'));
        console.log(values);
        dispatch({ type: types.DELETE_DEV, payload: afterDevs });
    } catch {
        dispatch({ type: types.ERROR_DEV });
    }
};
export const getStatusForGitHub = async (userName) => {
    console.log(userName);
    return fetch(`https://api.github.com/users/${userName}`)
        .then((resp) => resp.json())
        .then((data) => data);
};
