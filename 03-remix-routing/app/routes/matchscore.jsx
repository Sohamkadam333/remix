// Resource + UI Route

import { useLoaderData } from '@remix-run/react';
import React from 'react';

export async function loader(params) {
	const teamData = [
		{ id: 1, teamname: 'CSK', captain: 'Dhoni', city: 'chennai' },
		{ id: 2, teamname: 'MI', captain: 'Sharma', city: 'mumbai' },
	];

	return teamData;
}

const MatchScore = () => {
	const teamData = useLoaderData();

	return (
		<div className='container mx-auto bg-indigo-500 p-4 rounded'>
			<h1 className='text-2xl text-white'>Team Data</h1>
			<br />
			{teamData.map((team) => {
				return (
					<>
						<ul key={team.id}>
							<li className='text-white'>ID:{team.id}</li>
							<li className='text-white'>Team Name: {team.teamname}</li>
							<li className='text-white'>Captain: {team.captain}</li>
							<li className='text-white'>City: {team.city}</li>
						</ul>
						<br />
					</>
				);
			})}
		</div>
	);
};

export default MatchScore;
