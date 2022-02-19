import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
import P from 'prop-types';
export default function CardDelete({ handleDeleteDev, handleOpenDialogDelete, Close, id, setMessage }) {
    return (
        <div className="card-delete">
            <h2>Deletar Desenvolvedor</h2>
            <p>Tem certeza que deseja deletar este desenvolvedor?</p>
            <div className="buttons">
                <Close>
                    <DefaultButton customClass="cancel-form" text="Cancelar" handleClick={handleOpenDialogDelete} />
                </Close>
                <DefaultButton
                    handleClick={() => {
                        handleDeleteDev(id);
                        setMessage({ text: 'Item deletado com sucesso', type: 'success' });
                    }}
                    customClass="delete-form"
                    text="Deletar"
                />
            </div>
        </div>
    );
}

CardDelete.propTypes = {
    handleDeleteDev: P.func,
    Close: P.any,
    id: P.number,
    handleOpenDialogDelete: P.func,
    setMessage: P.func,
};
