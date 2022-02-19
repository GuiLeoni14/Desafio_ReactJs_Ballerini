import { useReducer } from 'react';
import { DevsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import P from 'prop-types';
export default function DevsProvider({ children }) {
    const [stateDevs, devsDispatch] = useReducer(reducer, data);
    return <DevsContext.Provider value={{ stateDevs, devsDispatch }}>{children}</DevsContext.Provider>;
}

DevsProvider.propTypes = {
    children: P.node,
};
