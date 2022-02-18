import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
import P from 'prop-types';
export default function CardDelete({ handleDeleteDev, Close, id }) {
    return (
        <div className="card-delete">
            <h2>Deletar Desenvolvedor</h2>
            <p>Tem certeza que deseja deletar este desenvolvedor?</p>
            <div className="buttons">
                <DefaultButton handleClick={() => handleDeleteDev(id)} customClass="delete-form" text="Deletar" />
                <Close>
                    <DefaultButton customClass="cancel-form" text="Cancelar" />
                </Close>
            </div>
        </div>
    );
}

CardDelete.propTypes = {
    handleDeleteDev: P.func,
    Close: P.any,
    id: P.number,
};
