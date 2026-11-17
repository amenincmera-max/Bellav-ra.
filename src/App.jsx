import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header cartCount={cart.length} />
      <main>
        <Hero />
        <ProductList onAddToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
