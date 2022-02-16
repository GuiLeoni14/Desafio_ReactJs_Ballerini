import { useState } from 'react';
import { data } from './data';
import { NavBarContext } from './context';
import P from 'prop-types';
export default function NavBarProvider({ children }) {
    const [showSearch, setShowSearch] = useState(data);
    return <NavBarContext.Provider value={{ showSearch, setShowSearch }}>{children}</NavBarContext.Provider>;
}

NavBarProvider.propTypes = {
    children: P.node,
};
