import P from 'prop-types';
import icon_github from '../../../assets/img/github.svg';
import icon_linkedin from '../../../assets/img/icon_linkedin.svg';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
export default function CardViewMore({ valuesDev, handleOpenDialogViewMore, Close }) {
    return (
        <div className="card_view_more" data-aos="fade-up">
            <div className="main_view_more">
                <div className="img">
                    <img src={valuesDev.avatar} alt="" />
                </div>
                <h4>{valuesDev.name}</h4>
                <div className="icons">
                    <a href={valuesDev.github} target="_blank" rel="noreferrer">
                        <img src={icon_github} alt="" />
                    </a>
                    <a href={`https://www.linkedin.com/in/${valuesDev.linkedin}`} target="_blank" rel="noreferrer">
                        <img src={icon_linkedin} alt="" />
                    </a>
                </div>
                <div className="buttons">
                    <Close>
                        <DefaultButton handleClick={handleOpenDialogViewMore} customClass="cancel" text="fechar" />
                    </Close>
                    <a href={valuesDev.github} target="_blank" rel="noreferrer">
                        <DefaultButton customClass="add-form" text="Ver perfil" />
                    </a>
                </div>
            </div>
        </div>
    );
}

CardViewMore.propTypes = {
    valuesDev: P.any,
    handleOpenDialogViewMore: P.func,
    Close: P.any,
};
