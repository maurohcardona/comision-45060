import './App.css';
import Header from './Componentes/Header';
import ItemListContainer from './Componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Inicio from './Componentes/Inicio';
import CartProvider from './Context/CartContext';
import Cart from './Componentes/Cart';



function App() {
  return (
   <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<ItemListContainer />}  />
        <Route path='/categoria/:categoryName' element={<ItemListContainer />}  />
        <Route path='/detail/:idProd' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
