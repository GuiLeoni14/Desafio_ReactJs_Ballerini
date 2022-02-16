import { useContext, useEffect, useRef, useState } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs, deleteDevs } from '../../context/DevsContext/actions';
import Form from './Form';
import { changeSearch } from '../../context/NavBarContext/actions';
import { NavBarContext } from '../../context/NavBarContext/context';
import './styles.scss';
import SlideDevs from './SlideDevs';
export default function Devs() {
    const isMounted = useRef(true);
    const {
        stateDevs: { devs },
        devsDispatch,
    } = useContext(DevsContext);
    const { showSearch, setShowSearch } = useContext(NavBarContext);

    useEffect(() => {
        changeSearch(showSearch, setShowSearch);
    }, [setShowSearch]);

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
        <div className="s_devs">
            <div className="container">
                <div className="main_devs">
                    <div className="slide-devs">
                        <div className="swiper-wrapper">
                            <SlideDevs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
