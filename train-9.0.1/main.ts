interface Person {
    name: string;
    surname: string;
    age: number
}

interface BossPerson {
    name: string;
    surname: string;
    age: number;
    company: string 
}

const employee: Person = {
    name: 'Kamil',
    surname: 'Cecherz',
    age: 37
};

const boss: BossPerson = {
    name: 'Marcin',
    surname: 'Hubas',
    age: 59,
    company: 'IBM'
};

type Personality<T> = T extends Person | BossPerson ? T : never;

function getPerson<T>(personInfo: Personality<T>): Personality<T> {
    return personInfo;
}

console.log(getPerson(employee), typeof getPerson(employee));
console.log(getPerson(boss), typeof getPerson(boss));