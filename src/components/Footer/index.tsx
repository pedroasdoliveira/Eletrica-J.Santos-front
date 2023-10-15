import "./style.css";

import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';

import FooterWallpaper from "../../images/png/wallpaper_footer.png";
import NameStoreLogo from '../../images/png/name_footer.png';
import ServiceIcon from '../../images/icons/service_icon.svg';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_wallpaper">
        <img src={FooterWallpaper} alt="" />

        <div>
          <button type="button" className="btn btn_contact">
            Acione nosso televendas
          </button>
        </div>
      </div>

      <div className="footer_descriptions">
        <div className="footer_contents">
          <div className="footer_infos">
            <img src={NameStoreLogo} alt="" />

            <h3>NOS SIGA NAS REDES</h3>

            <p>
              Venha na Elétrica J. Santos e garanta a melhor opção para sua
              casa!
            </p>

            <div>
              <i>
                <BsWhatsapp />
              </i>

              <i>
                <BsFacebook />
              </i>

              <i>
                <BsInstagram />
              </i>
            </div>
          </div>

          <hr />

          <div className="footer_copy">
            <p>
              © Copyright 2021 - Elétrica J. Santos - Todos os Direitos
              Reservados
            </p>

            <p>Desenvolvido por <img src={ServiceIcon} alt="" /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
