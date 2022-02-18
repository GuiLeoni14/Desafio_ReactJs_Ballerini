import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import Input from '../../../components/Input';
import P from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import { Dialog } from '@radix-ui/react-dialog';
export default function Form({ handleSubmit, typeButton, textButton, titleForm, Close, valuesDev }) {
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
    return (
        <form onSubmit={submit} className="form">
            {titleForm && <h2>{titleForm}</h2>}
            <div className="fields">
                <Input
                    name="name"
                    type="text"
                    textLabel="Nome:"
                    handleChange={handleOnChange}
                    values={valuesDev ? valuesDev.name : ''}
                />
                <Input name="avatar" type="text" textLabel="Avatar:" handleChange={handleOnChange} />
                <Input name="cargo" type="text" textLabel="Cargo:" handleChange={handleOnChange} />
                <Input name="github" type="text" textLabel="GitHub:" handleChange={handleOnChange} />
                <Input name="linkedin" type="text" textLabel="Linkedin:" handleChange={handleOnChange} />
                <div className="button">
                    <Close>
                        <DefaultButton customClass="cancel-form" text="Cancelar" />
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
};
