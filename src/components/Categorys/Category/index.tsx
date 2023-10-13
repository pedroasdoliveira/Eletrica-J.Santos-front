import "./style.css";

import Lampada from '../../../images/category/lampada.png';
import Acessorios from '../../../images/category/acessorios.png';
import Lustres from "../../../images/category/lustres.png";
import Luminarias from "../../../images/category/luminarias.png";
import Decoracoes from "../../../images/category/decoracoes.png";
import Cabos from "../../../images/category/cabos.png";
import Ferramentas from '../../../images/category/ferramentas.png';
import Utensilios from '../../../images/category/utensilios.png';

const Category = () => {
  return (
    <div className="category_container">
      <div className="box">
        <h2>Lâmpada</h2>

        <div>
          <img src={Lampada} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Lustres</h2>

        <div>
          <img src={Lustres} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Luminárias</h2>

        <div>
          <img src={Luminarias} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Decorações</h2>

        <div>
          <img src={Decoracoes} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Acessórios</h2>

        <div>
          <img src={Acessorios} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Ferramentas</h2>

        <div>
          <img src={Ferramentas} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Utensílios Domésticos</h2>

        <div>
          <img src={Utensilios} alt="" />
        </div>
      </div>

      <div className="box">
        <h2>Cabos</h2>

        <div>
          <img src={Cabos} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Category