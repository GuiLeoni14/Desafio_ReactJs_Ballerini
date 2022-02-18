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
}) {
    const [values, setValues] = useState([]);
    const handleOnChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(values);
    };
    console.log(valuesDev);
    return (
        <form onSubmit={submit} className="form">
            {titleForm && <h2>{titleForm}</h2>}
            <div className="fields">
                <Input
                    name="name"
                    type="text"
                    textLabel="Nome:"
                    handleChange={handleOnChange}
                    value={valuesDev ? valuesDev.name : ''}
                />
                <Input
                    name="avatar"
                    type="text"
                    textLabel="Avatar:"
                    handleChange={handleOnChange}
                    value={valuesDev ? valuesDev.avatar : ''}
                />
                <Input
                    name="cargo"
                    type="text"
                    textLabel="Cargo:"
                    handleChange={handleOnChange}
                    value={valuesDev ? valuesDev.cargo : ''}
                />
                <Input
                    name="github"
                    type="text"
                    textLabel="GitHub:"
                    handleChange={handleOnChange}
                    value={valuesDev ? valuesDev.github : ''}
                />
                <Input
                    name="linkedin"
                    type="text"
                    textLabel="Linkedin:"
                    handleChange={handleOnChange}
                    value={valuesDev ? valuesDev.linkedin : ''}
                />
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
    Close: P.node,
    handleOpenDialogEdit: P.func,
};
