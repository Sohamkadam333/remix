import { Link } from '@remix-run/react';
import React from 'react';

const Posts = () => {
	return (
		<div className='container mx-auto'>
			<h1>Post Page</h1>

			<Link to='/about' replace>
				Go to About Page
			</Link>
		</div>
	);
};

export default Posts;
