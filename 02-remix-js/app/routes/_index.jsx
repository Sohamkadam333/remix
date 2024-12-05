export const meta = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<h1>Test Remix JS App</h1>
		</div>
	);
}
