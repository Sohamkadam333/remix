import { Outlet } from '@remix-run/react';
import React from 'react';

const Auth = () => {
	return (
		<div>
			<h1>Auth Page</h1>
			<Outlet />
		</div>
	);
};

export default Auth;
