import "./style.css";

import { useEffect, useLayoutEffect, useState } from "react";

import Woman_Photo from "../../images/png/foto_mulher.png";
import Frame_2 from "../../images/png/frame_2.png";
import Chandelier from "../../images/png/lustre.png";
import Stars from "../../images/png/stars.png";
import Vector from "../../images/png/Vector.png";

const Banner = () => {
  return (
    <div className="container text-center main_banner">
      <div className="box_container">
        <h1>ILUMINE O SEU DIA A DIA!</h1>

        <p>
          Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
          dia! Temos produtos para toda sua casa com a melhor qualidade e
          atendimento da região!
        </p>

        <button type="button" className="btn btn_products">
          Veja nossos Produtos
        </button>
        <button type="button" className="btn btn_know">
          NOS CONHEÇA MELHOR
        </button>

        <div className="box_down">
          <img src={Vector} alt="Simbolo de seta para baixo" />

          <p>Role para ver mais</p>
        </div>
      </div>

      <div className="box_container">
        <div className="img_position">
          <img src={Woman_Photo} alt="" className="img_1" />

          <img src={Chandelier} alt="" className="img_2" />

          <img src={Frame_2} alt="" className="img_3" />

          <img src={Stars} alt="" className="img_4" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
