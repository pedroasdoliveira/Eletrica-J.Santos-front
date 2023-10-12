import "./style.css";
import Wallpaper_Products from "../../images/png/fundo_produtos.png";
import Product from "./Product";

const Products = () => {
  return (
    <div className="main_products">
      <section className="wallpaper_box">
        <img src={Wallpaper_Products} alt="" />
      </section>

      <section className="products_box">
        <h1>Produtos em Destaque</h1>

        <Product />
      </section>
    </div>
  );
};

export default Products;
