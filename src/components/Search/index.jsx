import './styles.scss';
import P from 'prop-types';
import icon_search from '../../assets/img/search.svg';
export default function Search({ placeholder }) {
    return (
        <div className="search">
            <img src={icon_search} alt="" />
            <input type="search" placeholder={placeholder} />
        </div>
    );
}

Search.propTypes = {
    placeholder: P.string.isRequired,
};
