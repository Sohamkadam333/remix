import { Link } from '@remix-run/react';
import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='container mx-auto p-4 bg-yellow-200 flex justify-between m-2 rounded-3xl'>
				<h1>Nav Title</h1>
				<ul>
					<li className='mb-5'>
						<Link className='p-2' to='/'>
							Home
						</Link>
					</li>
					<li className='mb-5'>
						<Link className='p-2' to='/blogs'>
							Blogs Page
						</Link>
					</li>
					<li className='mb-5'>
						<Link className='p-2' to='/blog/$'>
							Single Blog
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
