import { ArrayList } from "./ArrayList";

const dateContainer = new ArrayList<Date>;
const stringContainer = new ArrayList<string>
const numContainer = new ArrayList<number>([1, 2, 3, 4]);

dateContainer.add(new Date());

stringContainer.add('Java');
stringContainer.add('C++');
stringContainer.add('C#');
stringContainer.add('Ruby');
stringContainer.add('PHP');

dateContainer.log();
numContainer.log();
stringContainer.log();