export const meta = () => {
	return [{ title: 'Home Page' }, { name: 'Description', content: 'This is my Home page' }];
};
export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<h1 className='text-3xl'>Home Page</h1>
		</div>
	);
}
