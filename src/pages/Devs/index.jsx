import { useContext, useEffect, useRef, useState } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs, deleteDevs } from '../../context/DevsContext/actions';
import Form from './Form';
export default function Devs() {
    const isMounted = useRef(true);
    const {
        stateDevs: { devs },
        devsDispatch,
    } = useContext(DevsContext);
    useEffect(() => {
        loadDevs(devsDispatch);
    }, [devsDispatch]);

    const createDevs = (values) => {
        addDevs(devsDispatch, values);
        // loadDevs(devsDispatch);
    };

    const deleteDev = (id) => {
        console.log(id);
        deleteDevs(devsDispatch, id);
    };

    return (
        <>
            Devs:
            {devs.map((dev) => (
                <h1 key={dev.id} onClick={() => deleteDev(dev.id)}>
                    {dev.name}
                </h1>
            ))}
            <button onClick={() => addDevs(devsDispatch)}>Adicionar</button>
            <Form handleSubmit={createDevs} />
        </>
    );
}
