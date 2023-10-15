import "./style.css";

import StorePhoto from '../../images/png/store_photo.png';

const Description = () => {
  return (
    <div className="container_description">
      <h1>Sua melhor opção</h1>

      <div className="box_description">
        <div>
          <p>
            Desde 1970 somos especializados em materiais elétricos, sendo uma
            das principais distribuidoras do setor. Oferecemos os melhores
            produtos, com o preço que cabe no seu bolso e atende todas as
            necessidades do seu dia a dia. Aqui você irá encontrar lustres,
            luminárias, utilidades domésticas, ferramentas, acessórios,
            lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada
            padrão Eletropaulo, materiais elétricos em geral, equipamentos de
            segurança e comunicação.
          </p>

          <button type="button" className="btn btn_about">
            Saiba mais sobre nós
          </button>
        </div>

        <img src={StorePhoto} alt="" />
      </div>
    </div>
  );
}

export default Description