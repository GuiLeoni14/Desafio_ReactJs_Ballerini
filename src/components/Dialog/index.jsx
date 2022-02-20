import './styles.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { DefaultButton } from '../Buttons/DefaultButton';
import P from 'prop-types';
import Form from '../../pages/Devs/Form';
export default function MyDialog({ content, typeButton, textButton, titleForm, handleSubmitForm, setMessage }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <DefaultButton text="Adicionar Desenvolvedor" customClass="add" />
            </Dialog.Trigger>
            <Dialog.Overlay className="overlay">
                <Dialog.Content className="content">
                    {content == 'form' ? (
                        <Form
                            textButton={textButton}
                            typeButton={typeButton}
                            titleForm={titleForm}
                            handleSubmit={handleSubmitForm}
                            setMessage={setMessage}
                            Close={Dialog.Close}
                        />
                    ) : (
                        <h1>Deletar</h1>
                    )}
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Root>
    );
}

MyDialog.propTypes = {
    handleSubmitForm: P.func,
    content: P.node,
    typeButton: P.string,
    textButton: P.string,
    setMessage: P.func,
    titleForm: P.string,
};
