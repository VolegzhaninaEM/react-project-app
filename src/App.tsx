import React,
{
    useEffect
}
    from 'react';
import axios from "axios";
import {Product} from './components/Product';
import {products} from "./data/products";
import {IProduct} from "./models";

function App() {

    async function fetchProduct() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        console.log(response);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">

            {products.map(product => <Product product={product} key={product.id}/>)}

        </div>
    );
}

export default App;
