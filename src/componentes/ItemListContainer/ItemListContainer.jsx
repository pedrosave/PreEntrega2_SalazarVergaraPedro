import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()


    useEffect(() => {
        if (idCategoria) {
            gFetch()
                .then(res => {
                    setProductos(res.filter(producto => producto.categoria === idCategoria))
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(res => {
                    setProductos(res)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }

    }, [idCategoria])

    console.log(idCategoria)


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
                <ItemList productos={productos} />
            </div>

    )
}

export default ItemListContainer