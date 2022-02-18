import P from 'prop-types';
import './styles.scss';
export default function Input({ type, placeholder, value, name, textLabel, handleChange }) {
    return (
        <>
            <label htmlFor={name} className="label">
                {textLabel}
            </label>
            <input type={type} placeholder={placeholder} value={value} name={name} id={name} onChange={handleChange} />
        </>
    );
}

Input.propTypes = {
    type: P.string.isRequired,
    placeholder: P.string,
    value: P.string,
    name: P.string.isRequired,
    textLabel: P.string.isRequired,
    handleChange: P.func.isRequired,
};
