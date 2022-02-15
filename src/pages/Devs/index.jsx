import { useContext, useEffect } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs } from '../../context/DevsContext/actions';
export default function Devs() {
    const {
        stateDevs: { devs },
        devsDispatch,
    } = useContext(DevsContext);
    console.log(devsDispatch);
    useEffect(() => {
        loadDevs(devsDispatch);
    }, [devsDispatch]);
    console.log(devs);
    return (
        <>
            Devs:
            {devs.map((dev) => (
                <h1 key={dev.id}>{dev.name}</h1>
            ))}
            <button onClick={() => addDevs(devsDispatch)}>Adicionar</button>
        </>
    );
}
