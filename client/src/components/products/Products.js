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

				{/* <div className='card'>
					<a href='product.html'>
						<img src={NikeFat} alt='p1.jpg' />
					</a>
					<div className='card-body'>
						<a className='card-product-name' href='product.html'>
							<h2>Nike Fat Guy Shirts</h2>
						</a>
						<div className='ratings'>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
						</div>
						<p className='price'>$5.99</p>
					</div>
				</div>

				<div className='card'>
					<a href='product.html'>
						<img src={AdidasBoys} alt='p1.jpg' />
					</a>
					<div className='card-body'>
						<a className='card-product-name' href='product.html'>
							<h2>Adidas Boys' Shirts</h2>
						</a>
						<div className='ratings'>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
						</div>
						<p className='price'>$18.47</p>
					</div>
				</div>

				<div className='card'>
					<a href='product.html'>
						<img src={NikeFatPants} alt='p1.jpg' />
					</a>
					<div className='card-body'>
						<a className='card-product-name' href='product.html'>
							<h2>Nike Fat Guy Pants</h2>
						</a>
						<div className='ratings'>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
							<span>
								<i className='far fa-star'></i>
							</span>
						</div>
						<p className='price'>$2.99</p>
					</div>
				</div>

				<div className='card'>
					<a href='product.html'>
						<img src={JNCO} alt='p1.jpg' />
					</a>
					<div className='card-body'>
						<a className='card-product-name' href='product.html'>
							<h2>JNCO Jeans</h2>
						</a>
						<div className='ratings'>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fa fa-star-half'></i>
							</span>
						</div>
						<p className='price'>$15,099.99</p>
					</div>
				</div>

				<div className='card'>
					<a href='product.html'>
						<img src={StealthySlacks} alt='p1.jpg' />
					</a>
					<div className='card-body'>
						<a className='card-product-name' href='product.html'>
							<h2>Stealthy Slacks</h2>
						</a>
						<div className='ratings'>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
							<span>
								<i className='fas fa-star'></i>
							</span>
						</div>
						<p className='price'>$31.98</p>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Products;
