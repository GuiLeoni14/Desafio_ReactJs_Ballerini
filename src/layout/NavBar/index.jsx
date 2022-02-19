import P from 'prop-types';
import Container from '../Container';
import './styles.scss';
import icon_facebook from '../../assets/img/facebook.svg';
import icon_linkedin from '../../assets/img/linkedin.svg';
import icon_discord from '../../assets/img/discord.svg';
import icon_logo from '../../assets/img/logo.svg';
import { useContext, useEffect } from 'react';
import { NavBarContext } from '../../context/NavBarContext/context';
import Search from '../../components/Search';
import { changeSearch, devSearch } from '../../context/NavBarContext/actions';
import { DevsContext } from '../../context/DevsContext/context';
export default function NavBar() {
    const {
        stateSearch: { visible, devResultSearch },
        searchDispatch,
    } = useContext(NavBarContext);
    const {
        stateDevs: { devs },
        devsDispatch,
    } = useContext(DevsContext);
    const searchDevs = (e) => {
        devSearch(
            searchDispatch,
            devs.filter((item) => item.name.includes(e.target.value)),
        );
    };
    return (
        <header>
            <Container>
                <div className="text">
                    <ul>
                        <li>
                            <a href="">
                                <img src={icon_linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={icon_facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={icon_discord} alt="" />
                            </a>
                        </li>
                    </ul>
                    <div className="logo">
                        <img src={icon_logo} alt="" />
                        <span>Ballerini Devs</span>
                    </div>
                </div>
                {visible && <Search placeholder="Buscar" handleChange={searchDevs} />}
            </Container>
        </header>
    );
}
NavBar.propTypes = {
    showSearch: P.bool,
};
