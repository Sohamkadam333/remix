// Optional Segment Route

import React from 'react';

export async function loader({ params }) {
	const language = params.lang;
	console.log(language);
	return language;
}

const Products = () => {
	return <div>Products</div>;
};

export default Products;
