import {Teacher} from "./classes/Teacher";
import {Student} from "./classes/Student";

const teacher: any = new Teacher(1, "Jon Due");
console.log("Does the teacher have a token? ", teacher["token"]);
console.log("Does the teacher token property? ", teacher.hasOwnProperty("token"));

const student: any = new Student(101, "Mario Bros");
console.log("Does the student have a token? ", student["token"]);

console.log(student, teacher);