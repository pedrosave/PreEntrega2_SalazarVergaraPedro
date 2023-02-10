import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (

        <div className='card w-25 mt-3'>
            <Link to={`/detalle/${producto.id}`}>
                <div className='card-header'>
                    {producto.title}
                </div>
                <div className='card-body'>
                    <img src={producto.image} alt='image' className="w-50" />
                </div>
                <div>
                    {producto.price}
                </div>
                {/* <div className='card-footer'>
                                <button className='btn btn-outline-dark w-100'>Detalle</button>
                            </div> */}
            </Link>

        </div>
    )
}

export default Item