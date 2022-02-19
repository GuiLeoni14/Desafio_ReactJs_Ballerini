import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import Input from '../../../components/Input';
import P from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import { Dialog } from '@radix-ui/react-dialog';
export default function Form({
    handleSubmit,
    typeButton,
    textButton,
    titleForm,
    Close,
    valuesDev,
    handleOpenDialogEdit,
    setMessage,
}) {
    const [values, setValues] = useState(valuesDev || {}); // valuesDev tem que vir primeiro
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        setMessage('');
    };
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(values);
        setMessage({ text: 'Ação realizada com sucesso', type: 'success' });
    };
    return (
        <form onSubmit={submit} className="form">
            {titleForm && <h2>{titleForm}</h2>}
            <div className="fields">
                <Input
                    name="name"
                    type="text"
                    textLabel="Nome:"
                    handleChange={handleOnChange}
                    value={values.name ? values.name : ''}
                />
                <Input
                    name="avatar"
                    type="text"
                    textLabel="Avatar:"
                    handleChange={handleOnChange}
                    value={values.avatar ? values.avatar : ''}
                />
                <Input
                    name="cargo"
                    type="text"
                    textLabel="Cargo:"
                    handleChange={handleOnChange}
                    value={values.cargo ? values.cargo : ''}
                />
                <Input
                    name="github"
                    type="text"
                    textLabel="GitHub:"
                    handleChange={handleOnChange}
                    value={values.github ? values.github : ''}
                />
                <Input
                    name="linkedin"
                    type="text"
                    textLabel="Linkedin:"
                    handleChange={handleOnChange}
                    value={values.linkedin ? values.linkedin : ''}
                />
                {values.id && <Input type="hidden" value={valuesDev.id} />}
                <div className="button">
                    <Close>
                        <DefaultButton customClass="cancel-form" text="Cancelar" handleClick={handleOpenDialogEdit} />
                    </Close>
                    <DefaultButton text={textButton} customClass={typeButton} />
                </div>
            </div>
        </form>
    );
}

Form.propTypes = {
    handleSubmit: P.func.isRequired,
    typeButton: P.string,
    textButton: P.string,
    titleForm: P.string,
    valuesDev: P.object,
    Close: P.any,
    handleOpenDialogEdit: P.func,
    setMessage: P.func,
};
