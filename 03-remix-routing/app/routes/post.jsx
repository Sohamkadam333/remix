import { Outlet } from '@remix-run/react';
import React from 'react';

const post = () => {
	return (
		<div className='flex h-screen items-center justify-around flex-col'>
			<h1 className='text-5xl'>Post Page</h1>
			<Outlet />
		</div>
	);
};

export default post;
