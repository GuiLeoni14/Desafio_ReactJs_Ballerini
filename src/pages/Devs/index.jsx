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
import MyDialog from '../../components/Dialog';
import { data } from '../../context/DevsContext/data';
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
                            {devs.map((dev) => (
                                <SwiperSlide key={dev.id}>
                                    <SlideDevs
                                        name={dev.name}
                                        cargo={data.cargo}
                                        avatar={dev.avatar}
                                        github={dev.github}
                                        linkedin={dev.linkedin}
                                        deleteDev={deleteDev}
                                        id={dev.id}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <MyDialog
                    content="form"
                    typeButton="add-form"
                    textButton="adicionar"
                    titleForm="Adicionar Desenvolvedor"
                    handleSubmitForm={createDevs}
                />
            </div>
        </div>
    );
}
