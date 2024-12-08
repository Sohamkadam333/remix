import { Link } from '@remix-run/react';
import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='container p-4 flex justify-between mx-auto'>
				<h1>Nav Title</h1>
				<ul className='flex justify-between'>
					<li className='px-2'>
						<Link to='/'>Home</Link>
					</li>
					<li className='px-2'>
						<Link to='/about'>About</Link>
					</li>
					<li className='px-2'>
						<Link to='/contact'>Contact</Link>
					</li>
					<li className='px-2'>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
