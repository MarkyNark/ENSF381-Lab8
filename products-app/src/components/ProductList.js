import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
import { useProductsContext } from '../context/ProductsContext';

const ProductList = () => {
    const { setProducts } = useProductsContext();
    const [products, setLocalProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setLocalProducts(data.products);
        };
        getProducts();
    }, []);

    useEffect(() => {
        setProducts(products);
    }, [products, setProducts]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    );
};

export default ProductList;
