import React from 'react';

export async function loader({ params }) {
	const slug = params.slug;
	console.log(slug);
	return slug;
}

const SinglePost = () => {
	return <div>SinglePost</div>;
};

export default SinglePost;
