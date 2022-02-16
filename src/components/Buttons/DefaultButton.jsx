import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
export function DefaultButton({ text, link, customClass }) {
    return (
        <>
            {link ? (
                <Link to="/devs" className="btn">
                    {text}
                </Link>
            ) : (
                <button type="submit" className={`btn btn-${customClass}`}>
                    {text}
                </button>
            )}
        </>
    );
}
DefaultButton.propTypes = {
    text: P.string.isRequired,
    link: P.string,
    customClass: P.string,
};
