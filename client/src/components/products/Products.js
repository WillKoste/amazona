import React, {useEffect, useState} from 'react';
import NikeSlim from '../../images/p1.jpg';
import NikeFat from '../../images/p2.jpg';
import AdidasBoys from '../../images/p3.jpg';
import NikeFatPants from '../../images/p4.jpg';
import JNCO from '../../images/p5.jpg';
import StealthySlacks from '../../images/p6.jpg';

import ProductItem from './ProductItem';

const Products = () => {
	const [products, setProducts] = useState([]);

	return (
		<section class='main container'>
			<div class='cards'>
				<ProductItem NikeSlim={NikeSlim} />

				<div class='card'>
					<a href='product.html'>
						<img src={NikeFat} alt='p1.jpg' />
					</a>
					<div class='card-body'>
						<a class='card-product-name' href='product.html'>
							<h2>Nike Fat Guy Shirts</h2>
						</a>
						<div class='ratings'>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
						</div>
						<p class='price'>$5.99</p>
					</div>
				</div>

				<div class='card'>
					<a href='product.html'>
						<img src={AdidasBoys} alt='p1.jpg' />
					</a>
					<div class='card-body'>
						<a class='card-product-name' href='product.html'>
							<h2>Adidas Boys' Shirts</h2>
						</a>
						<div class='ratings'>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
						</div>
						<p class='price'>$18.47</p>
					</div>
				</div>

				<div class='card'>
					<a href='product.html'>
						<img src={NikeFatPants} alt='p1.jpg' />
					</a>
					<div class='card-body'>
						<a class='card-product-name' href='product.html'>
							<h2>Nike Fat Guy Pants</h2>
						</a>
						<div class='ratings'>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
							<span>
								<i class='far fa-star'></i>
							</span>
						</div>
						<p class='price'>$2.99</p>
					</div>
				</div>

				<div class='card'>
					<a href='product.html'>
						<img src={JNCO} alt='p1.jpg' />
					</a>
					<div class='card-body'>
						<a class='card-product-name' href='product.html'>
							<h2>JNCO Jeans</h2>
						</a>
						<div class='ratings'>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fa fa-star-half'></i>
							</span>
						</div>
						<p class='price'>$15,099.99</p>
					</div>
				</div>

				<div class='card'>
					<a href='product.html'>
						<img src={StealthySlacks} alt='p1.jpg' />
					</a>
					<div class='card-body'>
						<a class='card-product-name' href='product.html'>
							<h2>Stealthy Slacks</h2>
						</a>
						<div class='ratings'>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
							<span>
								<i class='fas fa-star'></i>
							</span>
						</div>
						<p class='price'>$31.98</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
