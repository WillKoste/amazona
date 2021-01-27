import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div>
				<Link className='logo' to='/'>
					Amazonia
				</Link>
			</div>
			<div className='nav-links'>
				<Link to='/cart'>Cart</Link>
				<Link to='/signin'>Sign In</Link>
			</div>
		</nav>
	);
};

export default Navbar;
