import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
export function SubmitButton({ text }) {
    return (
        <button type="submit" className="btn btn-submit">
            {text}
        </button>
    );
}
SubmitButton.propTypes = {
    text: P.string.isRequired,
};
