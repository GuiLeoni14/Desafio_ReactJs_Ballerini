import { useContext } from 'react';
import { NavBarContext } from '../../context/NavBarContext/context';
import Container from '../../layout/Container';
import programer from '../../assets/img/programador.svg';
import blob1 from '../../assets/img/blob1.svg';
import blob2 from '../../assets/img/blob2.svg';
import './styles.scss';
export default function Home() {
    const theContext = useContext(NavBarContext);
    console.log(theContext);
    return (
        <div className="s_home">
            <div className="img">
                <img src={blob1} alt="" />
                <img src={blob2} alt="" />
            </div>
            <Container>
                <div className="main_home">
                    <div className="text">
                        <h1>O maior banco de devs do Brasil</h1>
                        <p>
                            Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior
                            comunidade de desenvolvedores brasileiros.
                        </p>
                    </div>
                    <div className="image">
                        <img src={programer} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
