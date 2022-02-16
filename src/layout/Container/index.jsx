import './styles.scss';
import P from 'prop-types';
export default function Container({ children }) {
    return <div className="container">{children}</div>;
}
Container.propTypes = {
    children: P.node,
};
