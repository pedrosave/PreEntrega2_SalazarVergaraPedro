import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch"

const ItemListContainer = ({ greting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch()
            .then(res => {
                setProductos(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    return (

        loading
            ?
            <h2>Loading . . .</h2>
            :
            <div style={{
                display: "flex",
                flexWrap: "wrap",
            }}>
                {productos.map(producto =>
                    <div key={producto.id} className='card w-25 mt-3'>
                        <div className='card-header'>
                            {producto.title}
                        </div>
                        <div className='card-body'>
                            <img src={producto.image} alt='image' className="w-50" />
                        </div>
                        <div>
                            {producto.price}
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-dark w-100'>Detalle</button>
                        </div>

                    </div>)}
            </div>


        // <h1>
        //     {greting}

        // </h1>
    )
}

export default ItemListContainer