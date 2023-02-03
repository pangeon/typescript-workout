var counter = 0;
function getFullName(person) {
    counter++;
    return person.name + " " + person.surname;
}
var myFriends = [
    { name: 'Kamil', surname: 'Cecherz' },
    { name: 'Agnieszka', surname: 'Lasota' },
    { name: 'Radek', surname: 'Ignasiak' },
    { name: 'Aleksandra', surname: 'Bugajak' },
    { name: 'Adam', surname: 'Wolniewicz' },
    { name: 'Gosia', surname: 'Wolniewicz' },
    { name: 'Aleksandra', surname: 'Wolniewicz' },
    { name: 'Anna', surname: 'Just' },
    { name: 'Aneta', surname: 'Spiewak' },
    { name: 'Kuba', surname: 'Pacyniak' },
    { name: 'Andrzej', surname: 'Ogrodowczyk' },
];
function simpleSort(persons) {
    return persons.slice().sort(function (first, second) {
        var firstFullName = getFullName(first.surname);
        var secondFullName = getFullName(second.surname);
        return firstFullName.localeCompare(secondFullName.surname);
    });
}
function advancedSort(persons) {
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    var result = tuples.map(function (tuple) { return tuple[0]; });
    return result;
}
counter = 0;
var sortedSimple = simpleSort(myFriends);
console.log(sortedSimple);
console.log("simpleSort: " + counter);
console.log("*****************************************************");
counter = 0;
var sortedAdvanced = advancedSort(myFriends);
console.log(sortedAdvanced);
console.log("advancedSort: " + counter);
