import { Link, NavLink } from '@remix-run/react';
import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='container mx-auto flex justify-between bg-green-200 rounded-md p-4'>
				<h1 className='text-xl'>Navigation Demo</h1>
				<ul className='flex flex-col'>
					<li className='p-2'>
						<a href='/posts'>Using anchor tag</a>
					</li>
					<li className='p-2'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
								};
							}}
							to='/posts'>
							Using Link Tag
						</NavLink>
					</li>

					<li className='p-2'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
								};
							}}
							to={{
								hash: '#123',
								pathname: '/about',
								search: '?helloworld',
							}}
							key={{ test: 'test123' }}
							state={{ name: 'soham kadam' }}>
							About
						</NavLink>
					</li>

					<li className='p-2'>
						<Link
							to={{
								pathname: '/post',
								hash: '#123',
								search: '?helloworld',
							}}>
							Link with Attributes
						</Link>

						{/* Prefetch */}
					</li>

					<li className='p-2'>
						<Link to='/posts' prefetch='intent'>
							Render Prefetch
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
