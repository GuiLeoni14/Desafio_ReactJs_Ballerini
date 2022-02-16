import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
export function AddButton({ text }) {
    return (
        <Link to="/devs" className="btn btn-success">
            {text}
        </Link>
    );
}
AddButton.propTypes = {
    text: P.string.isRequired,
    handleClick: P.func,
};
