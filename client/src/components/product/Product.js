import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Rating from '../products/Rating';

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

	const {name, id, brand, image, number_reviews, rating, description, price, category, items_in_stock} = product;

	return (
		<div className='container'>
			<Link to='/' className='btn mb-2'>
				Go Back
			</Link>
			<div className='row'>
				<div className='col-2'>
					<img src={`/${image}`} alt={name} className='mt-3' />
				</div>
				<div className='col-1'>
					<ul>
						<li>
							<h1>{name}</h1>
						</li>
						<li>
							<Rating numberReviews={number_reviews} rating={rating} />
						</li>
						<li>
							<strong>Price:</strong> ${price}
						</li>
						<li>
							<p>
								<strong>Description:</strong> {description}
							</p>
						</li>
					</ul>
				</div>
				<div className='col-1'>
					<div className='card card-body'>
						<ul>
							<li>
								<div className='row'>
									<div>Price</div>
									<div className='price'>${price}</div>
								</div>
							</li>
							<li>
								<div className='row'>
									<div>Status</div>
									<div>{items_in_stock > 0 ? <span className='success'>In Stock</span> : <span className='fail'>Out of Stock</span>}</div>
								</div>
							</li>
							<li>
								<button style={{marginTop: '.5rem'}} className='btn btn-primary btn-block'>
									Add to Cart
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
