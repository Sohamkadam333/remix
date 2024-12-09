import { useLocation, useNavigate } from '@remix-run/react';
import React from 'react';

const About = () => {
	const location = useLocation();

	console.log('State:', location.state);
	console.log('Hash:', location.hash);
	console.log('Key:', location.key);
	console.log('Pathname:', location.pathname);
	console.log('Search:', location.search);

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate({
			pathname: '/posts',
			hash: '#321',
			search: '?testnavigation',
		});

		// use go to -1 navigation history stack use navigate(-1)
		// navigate(-1);  // backward

		// use go to 1 navigation history stack use navigate(-1)
		// navigate(1);  // forward
	};

	return (
		<div className='container mx-auto'>
			<h1 className='text-2xl'>About Page</h1>

			<button className='bg-yellow-300 rounded-lg p-3 hover:bg-yellow-500' onClick={handleNavigate}>
				Go To Posts Page
			</button>
		</div>
	);
};

export default About;
