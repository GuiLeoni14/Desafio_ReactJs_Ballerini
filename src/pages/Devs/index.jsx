import { useContext, useEffect, useRef, useState } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs } from '../../context/DevsContext/actions';
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

    const handleAddDevs = (values) => {
        addDevs(devsDispatch, values);
        loadDevs(devsDispatch); // verificar depois
    };

    return (
        <>
            Devs:
            {devs.map((dev) => (
                <h1 key={dev.id}>{dev.name}</h1>
            ))}
            <button onClick={() => addDevs(devsDispatch)}>Adicionar</button>
            <Form handleSubmit={handleAddDevs} />
        </>
    );
}
