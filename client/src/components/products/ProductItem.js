import React from 'react';
import Rating from './Rating';
import {Link} from 'react-router-dom';

const ProductItem = ({NikeSlim, product}) => {
	return (
		<div className='card'>
			<Link to={`/product/${product.id}`}>
				<img src={product.image} alt='p1.jpg' />
			</Link>
			<div className='card-body'>
				<a className='card-product-name' href='product.html'>
					<h2>{product.name}</h2>
				</a>
				<Rating rating={product.rating} numberReviews={product.number_reviews} />
				<p className='price'>${product.price}</p>
			</div>
		</div>
	);
};

export default ProductItem;
