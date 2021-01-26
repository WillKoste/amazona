import React from 'react';

const ProductItem = ({NikeSlim}) => {
	return (
		<div class='card'>
			<a href='product.html'>
				<img src={NikeSlim} alt='p1.jpg' />
			</a>
			<div class='card-body'>
				<a class='card-product-name' href='product.html'>
					<h2>Nike Slim Shirts</h2>
				</a>
				<div class='ratings'>
					<span>
						<i class='fa fa-star'></i>
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
						<i class='far fa-star'></i>
					</span>
				</div>
				<p class='price'>$125.99</p>
			</div>
		</div>
	);
};

export default ProductItem;
