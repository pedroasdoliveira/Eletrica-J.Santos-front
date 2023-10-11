/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import Frame_1 from "../../images/png/frame_1.png";
import NameStore from "../../images/png/name_store.png";
import Navbar from "../navbar";

const Header = () => {
  return (
    <header>
      <div className="Frame1">
        <img src={Frame_1} alt="Frame de exemplo" />
      </div>

      <div className="Frame2">
        <img
          className="name_img"
          src={NameStore}
          alt="Imagem contendo o nome da loja"
        />
      </div>

      <div className="Frame3">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
