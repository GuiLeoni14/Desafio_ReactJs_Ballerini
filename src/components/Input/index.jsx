import P from 'prop-types';
export default function Input({ type, placeholder, value, name, textLabel, handleChange }) {
    return (
        <>
            <label htmlFor={name}>{textLabel}</label>
            <input type={type} placeholder={placeholder} value={value} name={name} id={name} onChange={handleChange} />
        </>
    );
}

Input.propTypes = {
    type: P.string.isRequired,
    placeholder: P.string.isRequired,
    value: P.string,
    name: P.string.isRequired,
    textLabel: P.string.isRequired,
    handleChange: P.func.isRequired,
};
