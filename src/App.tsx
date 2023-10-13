import './App.css';

import Banner from './components/Banner';
import Categorys from './components/Categorys';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <main className='App'>
      <Header />

      <section className='section-banner'>
        <Banner />
      </section>

      <section className='section-products'>
        <Products />
      </section>

      <section className='section-categories'>
        <Categorys />
      </section>
    </main>
  );
}

export default App;
