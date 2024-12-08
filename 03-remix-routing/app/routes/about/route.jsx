import React from 'react';
import Navbar from './about-components/Navbar';

const About = () => {
	return (
		<div>
			<Navbar />
			<div className='flex h-screen items-center justify-center'>
				<h1 className='text-5xl'>About Page</h1>
			</div>
		</div>
	);
};

export default About;
