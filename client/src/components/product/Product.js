import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Product = ({match}) => {
	const [product, setProduct] = useState({});

	const fetchData = async () => {
		const res = await axios.get(`/api/v1/products/${match.params.productid}`);

		console.log(res.data.product);
		setProduct(res.data.product);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const {name, id, brand, image, number_reviews, rating, description, category} = product;

	return (
		<div>
			<div className='row'>
				<div className='col-2'>
					<img src={`/${image}`} alt='' />
				</div>
				<div className='col-1'>
					<h1>Hey</h1>
				</div>
				<div className='col-1'>{description}</div>
			</div>
		</div>
	);
};

export default Product;
