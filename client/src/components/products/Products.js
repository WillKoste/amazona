import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';

const Products = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const res = await axios.get(`/api/v1/products`);
		setProducts(res.data.products);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section className='main container'>
			<div className='cards'>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
