import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetalContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import { ItemCount } from './componentes/ItemCount/ItemCount';

function App(props) {
  // const [count, setCount] = useState(0)

  return (

    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greting={'Bienvenido a mi primer Nav-Bar en React'} />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer greting={'Bienvenido a mi primer Nav-Bar en React'} />} />

        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />

        <Route path='' element={<Navigate to='/' />} />
      </Routes>

      {/* <ItemCount /> */}

    </BrowserRouter>

  )
}

export default App
