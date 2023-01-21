import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 45,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: () => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return;
        }

        productData.title = value;
        const response = axios.post<IProduct>('https://fakestoreapi.com/products', productData);

        onCreate();
    }

    const changeCaptureHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter product title..."
                   value={value}
                   onChangeCapture={changeCaptureHandler}/>

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="py-2 px-4 bg-yellow-400 hover:text-white hover:bg-blue-400">Create</button>
        </form>
    );
}

export default CreateProduct;