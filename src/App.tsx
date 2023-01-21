import React, {useState} from 'react';
import {Product} from './components/Product';
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {IProduct} from "./models";

function App() {
    const {loading, products, error, addProduct} = useProducts();
    const [modal, setModal] = useState(false);

    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error &&  <ErrorMessage error={error} />}
            { products.map(product => <Product product={product} key={product.id} />) }

            { modal && <Modal title="Create new product" onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            <button
                className="fixed px-2 text-top bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl"
                onClick={() => setModal(true)}>+</button>

        </div>
    );
}

export default App;
