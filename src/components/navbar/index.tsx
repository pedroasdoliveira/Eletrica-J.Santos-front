/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

const dropdownItens = [
  {
    title: "Lâmpadas",
    url: "#",
  },
  {
    title: "Lustres",
    url: "#",
  },
  {
    title: "Luminárias",
    url: "#",
  },
  {
    title: "Decorações",
    url: "#",
  },
  {
    title: "Acessórios",
    url: "#",
  },
  {
    title: "Ferramentas",
    url: "#",
  },
  {
    title: "Utensílios Domésticos",
    url: "#",
  },
  {
    title: "Cabos",
    url: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar" id="navbarNavDropdown">
          <ul className="navbar-nav nav-ul nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>

              <ul className="dropdown-menu menus">
                {dropdownItens.map((menu, index) => (
                  <li className="menu-items" key={index}>
                    <a className="dropdown-item" href={menu.url}>
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Localização
              </a>
            </li>

            <li className="nav-item">
              <button type="button" className="btn btn-dark btn-nav">
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
