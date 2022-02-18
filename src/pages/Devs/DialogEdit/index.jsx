import './styles.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import P from 'prop-types';
import Form from '../Form';
import { useEffect } from 'react';
export default function MyDialogEdit({
    content,
    typeButton,
    textButton,
    titleForm,
    handleSubmitForm,
    handleOpenDialogEdit,
    valuesDev,
}) {
    return (
        <Dialog.Root defaultOpen={true}>
            <Dialog.Overlay className="overlay">
                <Dialog.Content className="content">
                    {content == 'form' ? (
                        <Form
                            textButton={textButton}
                            typeButton={typeButton}
                            titleForm={titleForm}
                            handleSubmit={handleSubmitForm}
                            Close={Dialog.Close}
                            handleOpenDialogEdit={handleOpenDialogEdit}
                            valuesDev={valuesDev}
                        />
                    ) : (
                        <h1>Deletar</h1>
                    )}
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Root>
    );
}

MyDialogEdit.propTypes = {
    handleSubmitForm: P.func,
    content: P.node,
    typeButton: P.string,
    textButton: P.string,
    titleForm: P.string,
    handleOpenDialogEdit: P.func,
    valuesDev: P.object,
};
