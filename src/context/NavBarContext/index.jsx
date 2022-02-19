import { useReducer } from 'react';
import { data } from './data';
import { NavBarContext } from './context';
import P from 'prop-types';
import { reducer } from './reducer';
export default function NavBarProvider({ children }) {
    const [stateSearch, searchDispatch] = useReducer(reducer, data);
    return <NavBarContext.Provider value={{ stateSearch, searchDispatch }}>{children}</NavBarContext.Provider>;
}

NavBarProvider.propTypes = {
    children: P.node,
};
