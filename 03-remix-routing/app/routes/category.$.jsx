// splat route

import React from 'react';

export async function loader({ params }) {
	const param = params['*'];
	console.log(param);
	return param;
}

const Category = () => {
	return <div>Category</div>;
};

export default Category;
