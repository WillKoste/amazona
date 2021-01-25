import React from 'react';

const Navbar = () => {
	return (
		<nav class='navbar'>
			<div>
				<a class='logo' href='index.html'>
					Amazonia
				</a>
			</div>
			<div class='nav-links'>
				<a href='cart.html'>Cart</a>
				<a href='signin.html'>Sign In</a>
			</div>
		</nav>
	);
};

export default Navbar;
