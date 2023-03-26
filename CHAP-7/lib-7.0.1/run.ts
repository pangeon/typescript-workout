import { Person } from "./classes/Person";
import { count } from "./decorators/Counter"

const persons: Person[] = [
    new Person("Dobrosława", "Cecherz", new Date(1964, 5, 4)),
    new Person("Kamil", "Cecherz", new Date(1986, 1, 16)),
    new Person("Agnieszka", "Lasota", new Date(1973, 9, 18)),
]

const isWoman = (firstName: string): boolean => firstName[firstName.length -1] === "a";

persons.forEach((person, index) => {
    if(isWoman(person.firstName)) persons[index].title = "Pani";
    else persons[index].title = "Pan";    
});

persons.forEach(person => console.log(person.getFullName(), person.getAge()));
persons.forEach(person => console.log(person));

console.log(count);
console.log(persons[0].getAge());

