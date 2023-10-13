import "./style.css";

import Wallpaper from '../../images/png/fundo_categorias.png';
import Category from "./Category";

const Categorys = () => {
  return (
      <div className="main_category">
          <section className="wallpaper_category">
              <img src={Wallpaper} alt="" />
          </section>

          <section className="categories_container">
              <h1>Categorias</h1>

              <Category />
          </section>
    </div>
  )
}

export default Categorys