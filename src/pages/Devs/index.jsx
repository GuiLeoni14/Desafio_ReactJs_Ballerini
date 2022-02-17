import { useContext, useEffect, useRef, useState } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs, deleteDevs } from '../../context/DevsContext/actions';
import Form from './Form';
import { changeSearch } from '../../context/NavBarContext/actions';
import { NavBarContext } from '../../context/NavBarContext/context';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SlideDevs from './SlideDevs';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { DefaultButton } from '../../components/Buttons/DefaultButton';
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
                <DefaultButton text="Adicionar Desenvolvedor" customClass="add" />
                <div className="main_devs">
                    <div className="slide_devs">
                        <Swiper
                            className="swiper"
                            spaceBetween={10}
                            modules={[Navigation]}
                            navigation
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <SlideDevs />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideDevs />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideDevs />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideDevs />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
