import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<h1>Test Remix TS App</h1>
		</div>
	);
}
