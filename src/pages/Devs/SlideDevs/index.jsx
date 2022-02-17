import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import icon_github from '../../../assets/img/github.svg';
import icon_linkedin from '../../../assets/img/icon_linkedin.svg';
import './styles.scss';

export default function SlideDevs() {
    return (
        <div className="slide">
            <div className="card">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <h4>Nome da pessoa</h4>
                <span>Cargo da pessoa</span>
                <div className="info">
                    <a href="">
                        <img src={icon_github} alt="" />
                    </a>
                    <a href="">
                        <img src={icon_linkedin} alt="" />
                    </a>
                    <DefaultButton text="Ver mais" customClass="more" />
                </div>
            </div>
            <div className="buttons">
                <DefaultButton customClass="edit" text="Editar" />
                <DefaultButton customClass="delete" text="Deletar" />
            </div>
        </div>
    );
}
