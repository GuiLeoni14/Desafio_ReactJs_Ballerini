import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
export function DefaultButton({ text, link, customClass, type = 'submit', handleClick }) {
    return (
        <>
            {link ? (
                <Link to="/devs" className="btn">
                    {text}
                </Link>
            ) : (
                <button type={type} className={`btn btn-${customClass}`} onClick={handleClick}>
                    {text}
                </button>
            )}
        </>
    );
}
