import { AddButton } from '../../../components/Buttons/AddButton';
import Input from '../../../components/Input';
import P from 'prop-types';
import { useState } from 'react';
export default function Form({ handleSubmit }) {
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
        <form onSubmit={submit}>
            <Input
                name="name"
                placeholder="Digite o nome do desenvolvedor"
                type="text"
                textLabel="Nome:"
                handleChange={handleOnChange}
            />
            <AddButton text="Cadastrar" />
        </form>
    );
}

Form.propTypes = {
    handleSubmit: P.func.isRequired,
};
