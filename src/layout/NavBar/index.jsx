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
import { changeSearch } from '../../context/NavBarContext/actions';
export default function NavBar() {
    const { showSearch, setShowSearch } = useContext(NavBarContext);
    useEffect(() => {
        changeSearch(showSearch, setShowSearch);
    }, []);
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
                {showSearch && (
                    <div className="search">
                        <Search placeholder="Buscar" />
                    </div>
                )}
            </Container>
        </header>
    );
}
NavBar.propTypes = {
    showSearch: P.bool,
};
