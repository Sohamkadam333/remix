import { Outlet } from '@remix-run/react';
import React from 'react';

const Design = () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<h1 className='text-5xl'>Design Page</h1>
			<Outlet />
		</div>
	);
};

export default Design;
