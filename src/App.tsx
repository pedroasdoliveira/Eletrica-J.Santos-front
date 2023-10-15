import './App.css';

import Banner from './components/Banner';
import Categorys from './components/Categorys';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <main className="App">
      <Header />

      <section className="section-banner">
        <Banner />
      </section>

      <section className="section-products">
        <Products />
      </section>

      <section className="section-categories">
        <Categorys />
      </section>

      <section className="section-description">
        <Description />
      </section>

      <footer className='app-footer'>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
