import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import icon_github from '../../../assets/img/github.svg';
import icon_linkedin from '../../../assets/img/icon_linkedin.svg';
import './styles.scss';
import P from 'prop-types';
import { useState } from 'react';
import MyDialogEdit from '../DialogEdit';
export default function SlideDevs({
    name,
    cargo,
    avatar,
    github,
    linkedin,
    handleOpenDialogEdit,
    handleOpenDialogDelete,
    handleOpenDialogViewMore,
}) {
    return (
        <div className="slide">
            <div className="card">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <h4>{name}</h4>
                <span>{cargo}</span>
                <div className="info">
                    <a href={github}>
                        <img src={icon_github} alt="" />
                    </a>
                    <a href={`https://www.linkedin.com/in/${linkedin}`}>
                        <img src={icon_linkedin} alt="" />
                    </a>
                    <DefaultButton text="Ver mais" customClass="more" handleClick={handleOpenDialogViewMore} />
                </div>
            </div>
            <div className="buttons">
                <DefaultButton customClass="edit" text="Editar" handleClick={handleOpenDialogEdit} />
                <DefaultButton customClass="delete" text="Deletar" handleClick={handleOpenDialogDelete} />
            </div>
        </div>
    );
}

SlideDevs.propTypes = {
    name: P.string,
    cargo: P.string,
    avatar: P.string,
    github: P.any,
    linkedin: P.string,
    deleteDev: P.func,
    id: P.number,
    handleOpenDialogEdit: P.func,
    handleOpenDialogDelete: P.func,
    handleOpenDialogViewMore: P.func,
};
