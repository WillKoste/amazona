import React from 'react';

const Product = ({match}) => {
	return (
		<div>
			<h1>This is where the product page will be</h1>
			<h2>{match.params.productid}</h2>
		</div>
	);
};

export default Product;
