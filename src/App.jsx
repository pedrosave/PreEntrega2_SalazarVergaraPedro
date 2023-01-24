import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greting={'Bienvenido a mi primer Nav-Bar en React'} />

    </>


  )
}

export default App
