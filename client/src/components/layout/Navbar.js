import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div>
				<a className='logo' href='index.html'>
					Amazonia
				</a>
			</div>
			<div className='nav-links'>
				<a href='cart.html'>Cart</a>
				<a href='signin.html'>Sign In</a>
			</div>
		</nav>
	);
};

export default Navbar;
