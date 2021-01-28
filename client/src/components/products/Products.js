import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NikeSlim from '../../images/p1.jpg';
import NikeFat from '../../images/p2.jpg';
import AdidasBoys from '../../images/p3.jpg';
import NikeFatPants from '../../images/p4.jpg';
import JNCO from '../../images/p5.jpg';
import StealthySlacks from '../../images/p6.jpg';

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
