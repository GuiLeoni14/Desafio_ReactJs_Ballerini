import P from 'prop-types';
import icon_github from '../../../assets/img/github.svg';
import icon_linkedin from '../../../assets/img/icon_linkedin.svg';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
export default function CardViewMore({ valuesDev, handleOpenDialogViewMore, Close }) {
    console.log(valuesDev.github);
    return (
        <div className="card_view_more">
            <div className="main_view_more">
                <div className="img">
                    <img src={valuesDev.avatar} alt="" />
                </div>
                <h4>{valuesDev.name}</h4>
                <div className="icons">
                    <img src={icon_github} alt="" />
                    <img src={icon_linkedin} alt="" />
                </div>
                <div className="buttons">
                    <Close>
                        <DefaultButton handleClick={handleOpenDialogViewMore} customClass="cancel" text="fechar" />
                    </Close>
                    <DefaultButton customClass="add-form" text="Ver perfil" link={valuesDev.github} />
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
