import P from 'prop-types';
export default function Search({ placeholder }) {
    return <input type="search" placeholder={placeholder} />;
}

Search.propTypes = {
    placeholder: P.string.isRequired,
};
