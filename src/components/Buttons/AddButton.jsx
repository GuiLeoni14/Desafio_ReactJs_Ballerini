import P from 'prop-types';
export function AddButton({ text }) {
    return <button type="submit">{text}</button>;
}
AddButton.propTypes = {
    text: P.string.isRequired,
    handleClick: P.func,
};
