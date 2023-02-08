import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetalContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import { ItemCount } from './componentes/ItemCount/ItemCount';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greting={'Bienvenido a mi primer Nav-Bar en React'} />
      <ItemCount />
      <ItemDetailContainer />
      <CartContainer />
    </>


  )
}

export default App
