import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CheckoutPage />
      {/* <Products /> */}
      {/* <Product /> */}
    </div>
  );
}

export default App;
