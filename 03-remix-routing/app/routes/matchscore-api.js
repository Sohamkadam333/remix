// Resource route

export async function loader(params) {
	const teamData = [
		{ id: 1, teamname: 'CSK', captain: 'Dhoni', city: 'chennai' },
		{ id: 2, teamname: 'MI', captain: 'Sharma', city: 'mumbai' },
	];

	return teamData;
}
