interface Person {
	name: string,
	surname: string
}

let counter = 0;

function getFullName(person: Person) {
	counter++;
	return `${person.name} ${person.surname}`;
}

const myFriends: Person[] = [
	{name: 'Kamil', surname: 'Cecherz'},
	{name: 'Agnieszka', surname: 'Lasota'},
	{name: 'Radek', surname: 'Ignasiak'},
	{name: 'Aleksandra', surname: 'Bugajak'},
	{name: 'Adam', surname: 'Wolniewicz'},
	{name: 'Gosia', surname: 'Wolniewicz'},
	{name: 'Aleksandra', surname: 'Wolniewicz'},
	{name: 'Anna', surname: 'Just'},
	{name: 'Aneta', surname: 'Spiewak'},
	{name: 'Kuba', surname: 'Pacyniak'},
	{name: 'Andrzej', surname: 'Ogrodowczyk'},
];

function simpleSort(persons: Person[]): Person[] {
	return persons.slice().sort((first, second) => {
		const firstFullName = getFullName(first);
		const secondFullName = getFullName(second);

		return firstFullName.localeCompare(secondFullName);
	})
}

function advancedSort(persons: Person[]): Person[] {
	const tuples: [Person, string][] = 
	persons.map(person => [person, getFullName(person)]);
	
	tuples.sort((first, second) => first[1].localeCompare(second[1]));
	const result = tuples.map(tuple => tuple[0]);

	return result;
}

counter = 0;
const sortedSimple = simpleSort(myFriends);

console.log(sortedSimple);
console.log(`simpleSort: ${counter}`);

console.log(`*****************************************************`);

counter = 0;
const sortedAdvanced = advancedSort(myFriends);

console.log(sortedAdvanced);
console.log(`advancedSort: ${counter}`);
