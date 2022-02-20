import { useContext, useEffect, useRef, useState } from 'react';
import DevsProvider from '../../context/DevsContext';
import { DevsContext } from '../../context/DevsContext/context';
import { loadDevs, addDevs, deleteDevs, editDevs } from '../../context/DevsContext/actions';
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
import MyDialogEdit from './DialogEdit';
import { DefaultButton } from '../../components/Buttons/DefaultButton';
import MyDialog from '../../components/Dialog';
import { data } from '../../context/DevsContext/data';
import Message from '../../components/Message';
import no_results from '../../assets/img/noresults.gif';
export default function Devs() {
    const [openDialogEdit, setOpenDialogEdit] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [openDialogViewMore, setOpenDialogViewMore] = useState(false);
    const [dev, setDev] = useState([]);
    const [devDelete, setDevDelete] = useState([]);
    const [devViewMore, setDevViewMore] = useState([]);
    const [message, setMessage] = useState({});
    const {
        stateDevs: { devs, error },
        devsDispatch,
    } = useContext(DevsContext);
    const {
        stateSearch: { visible, devResultSearch },
        searchDispatch,
    } = useContext(NavBarContext);

    useEffect(() => {
        changeSearch(searchDispatch);
    }, [searchDispatch]);

    useEffect(() => {
        loadDevs(devsDispatch);
    }, [devsDispatch]);

    const createDevs = (values) => {
        addDevs(devsDispatch, values);
        // loadDevs(devsDispatch);
    };

    const deleteDev = (id) => {
        setOpenDialogDelete(!openDialogDelete);
        deleteDevs(devsDispatch, id);
    };

    const editDev = (values) => {
        editDevs(devsDispatch, values);
        setOpenDialogEdit(!openDialogEdit);
    };
    const dialogEdit = (dev) => {
        setOpenDialogEdit(!openDialogEdit); // responsavel por mandar os valores de dev, para o form
        setDev(dev);
        //setMessage('');
    };
    const dialogDelete = (devDelete) => {
        setOpenDialogDelete(!openDialogDelete); // responsavel por mandar os valores de dev, para o form
        setDevDelete(devDelete.id);
        //setMessage('');
    };
    const dialogViewMore = (dev) => {
        setOpenDialogViewMore(!openDialogViewMore);
        setDevViewMore(dev);
    };
    return (
        <div className="s_devs">
            <div className="container">
                {message &&
                    (error ? (
                        <Message
                            textMessage="Tivemos um problema ao realizar essa ação"
                            type="error"
                            setMessage={setMessage}
                        />
                    ) : (
                        <Message textMessage={message.text} type={message.type} setMessage={setMessage} />
                    ))}
                <div className="main_devs">
                    <div className="slide_devs" data-aos="flip-up">
                        <Swiper
                            className="swiper"
                            spaceBetween={40}
                            breakpoints={{
                                1080: {
                                    spaceBetween: 10,
                                    slidesPerView: 3,
                                },
                                750: {
                                    slidesPerView: 2,
                                },
                            }}
                            modules={[Navigation]}
                            navigation
                            slidesPerView={1}
                        >
                            {devResultSearch.length > 0 ? (
                                devResultSearch[0].name !== 'sem' ? (
                                    devResultSearch.map((dev) => (
                                        <SwiperSlide key={dev.id}>
                                            <SlideDevs
                                                name={dev.name}
                                                cargo={data.cargo}
                                                avatar={dev.avatar}
                                                github={dev.github}
                                                linkedin={dev.linkedin}
                                                deleteDev={deleteDev}
                                                id={dev.id}
                                                handleOpenDialogEdit={() => dialogEdit(dev)}
                                                handleOpenDialogDelete={() => dialogDelete(dev)}
                                                handleOpenDialogViewMore={() => dialogViewMore(dev)}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <div className="card_no_results">
                                        <img src={no_results} alt="" />
                                        <h1>Sem resultados</h1>
                                    </div>
                                )
                            ) : (
                                devs &&
                                devs.map((dev) => (
                                    <SwiperSlide key={dev.id}>
                                        <SlideDevs
                                            name={dev.name}
                                            cargo={data.cargo}
                                            avatar={dev.avatar}
                                            github={dev.github}
                                            linkedin={dev.linkedin}
                                            deleteDev={deleteDev}
                                            id={dev.id}
                                            handleOpenDialogEdit={() => dialogEdit(dev)}
                                            handleOpenDialogDelete={() => dialogDelete(dev)}
                                            handleOpenDialogViewMore={() => dialogViewMore(dev)}
                                        />
                                    </SwiperSlide>
                                ))
                            )}
                        </Swiper>
                    </div>
                </div>
                <MyDialog
                    content="form"
                    typeButton="add-form"
                    textButton="adicionar"
                    titleForm="Adicionar Desenvolvedor"
                    setMessage={setMessage}
                    handleSubmitForm={createDevs}
                />
                {openDialogEdit && (
                    <MyDialogEdit
                        content="form"
                        typeButton="edit-form"
                        textButton="Editar"
                        titleForm="Editar Desenvolvedor"
                        handleActionDeleteOrEdit={editDev}
                        valuesDev={dev}
                        setMessage={setMessage}
                        handleOpenDialogEdit={() => setOpenDialogEdit(!openDialogEdit)}
                    />
                )}
                {openDialogDelete && (
                    <MyDialogEdit
                        content="delete"
                        typeButton="edit-form"
                        textButton="Editar"
                        titleForm="Editar Desenvolvedor"
                        handleActionDeleteOrEdit={deleteDev}
                        valuesDev={devDelete}
                        setMessage={setMessage}
                        handleOpenDialogDelete={() => setOpenDialogDelete(!openDialogDelete)}
                    />
                )}
                {openDialogViewMore && (
                    <MyDialogEdit
                        content="more"
                        typeButton="edit-form"
                        textButton="Editar"
                        titleForm="Editar Desenvolvedor"
                        setMessage={setMessage}
                        valuesDev={devViewMore}
                        handleOpenDialogViewMore={() => setOpenDialogViewMore(!openDialogViewMore)}
                    />
                )}
            </div>
        </div>
    );
}
