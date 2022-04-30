import { getProducts } from "../utils/getProducts";

const ProductsListConteiner = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));

    },[]);


    return(
        <>
        <h1> Lista de productos</h1>
        {products.map(products =>(
            <div key={products.id}>
                <h1> {products.nombre}  </h1>
                <h3>{products.precio} </h3>
                <img src={products.pictureUrl} alt={products.nombre}/>
            </div>
            
        ))}
        </>
    )
}

export default ProductsListConteiner;