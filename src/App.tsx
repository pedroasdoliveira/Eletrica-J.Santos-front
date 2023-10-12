import './App.css';

import Banner from './components/Banner';
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
    </main>
  );
}

export default App;
