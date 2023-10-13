import "./style.css";

import Lustre_rustico from "../../../images/products/lustre_rustico.png";
import Lampada from "../../../images/products/lampada.png";
import Kit from "../../../images/products/kit.png";
import Acessorio from "../../../images/products/acessorio.png";
import Utensilio from "../../../images/products/utensilio.png";
import Chuveiro from "../../../images/products/chuveiro.png";
import Ventilador from "../../../images/products/ventilador.png";
import Tomada from "../../../images/products/tomada.png";

const Product = () => {
  return (
    <div className="grid_items">
      <div className="item">
        <span>Lustres</span>

        <img src={Lustre_rustico} alt="" />

        <div className="product_infos">
          <h2>Lustre suspenso rústico</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 1.500,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 1.000,00</p>
            </div>
          </div>

          <div className="description">
            <p>ou em 3x de R$ 333,33</p>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Lâmpada</span>

        <img src={Lampada} alt="" />

        <div className="product_infos">
          <h2>Lâmpada</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 60,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 45,00</p>
            </div>
          </div>

          <div className="description">
            <p>ou em 2x de R$ 22,50</p>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Extensão</span>

        <img src={Acessorio} alt="" />

        <div className="product_infos">
          <h2>Acessório</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 25,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 17,00</p>
            </div>
          </div>

          <div className="description">
            <p>ou em 2x de R$ 08,50</p>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Kit de ferramentas</span>

        <img src={Kit} alt="" />

        <div className="product_infos">
          <h2>Ferramentas</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 100,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 80,00</p>
            </div>
          </div>

          <div className="description">
            <p>ou em 2x de R$ 40,00</p>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Utensílios domésticos</span>

        <img src={Utensilio} alt="" />

        <div className="product_infos">
          <h2>Garfos de mesa inox</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 15,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 8,00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Acessórios</span>

        <img src={Chuveiro} alt="" />

        <div className="product_infos">
          <h2>Chuveiro Lorenzetti</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 120,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 100,00</p>
            </div>
          </div>

          <div className="description">
            <p>ou em 4x de R$ 25,00</p>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Utensílios domésticos</span>

        <img src={Ventilador} alt="" />

        <div className="product_infos">
          <h2>Ventilador 2 em 1, mesa e parede</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 50,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 30,00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Acessório</span>

        <img src={Tomada} alt="" />

        <div className="product_infos">
          <h2>Tomada</h2>

          <div className="prices_infos">
            <p className="real_value">R$ 20,00</p>

            <div className="promotion_box">
              <p className="promotion_value">R$ 10,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
