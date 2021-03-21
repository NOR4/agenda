import {
    Direction
} from './direction';
import {
    Mail
} from './mail';
import {
    Telephone
} from './phone';
import {
    Person
} from './person';

console.log('--------------------Iniciando programa----------------------');
console.log('--------------------Creando persona 1----------------------');

let direction1 = new Direction('Sauces', 3, 4, 'B', '23345h', 'Móstoles', 'Madrid')
let mail1 = new Mail('trabajo', 'pepitoperez@hotmail.com')
let telephone1 = new Telephone('personal', 678678678)
let person1 = new Person('Juan', 'Juno', 23, '12345678D', new Date(1990 - 5 - 14), 'yellow', 'no binary',
    [direction1], [mail1], [telephone1], 'premium');
console.log(person1.toString())
console.log('--------------------Creando persona 2----------------------');

let direction2 = new Direction('Rosales', 28, 1, 'I', '30002', 'Avilés', 'Asturias');
let mail2 = new Mail('persoal', 'juanita@hotmail.com');
let telefono2 = new Telephone('personal', 666555777);
let person2 = new Person('Juana', 'Juna', 32, '12345678x', new Date(1999 - 5 - 14), 'orange', 'female',
    [direction2], [mail2], [telefono2], 'no premium');
console.log(person2.toString())

console.log('--------------------Creando persona 2----------------------');
let direction3 = new Direction('Lilos', 37, 9, 'B', '23345h', 'Mostoles', 'Madrid');
let mail3 = new Mail('trabajo', 'pepitoperez@hotmail.com');
let telephone3 = new Telephone('personal', 666666666);
let person3 = new Person('Pepe', 'Gómez', 89, '12345678h', new Date(1930 - 7 - 24), 'blue', 'male',
    [direction3], [mail3], [telephone3], 'no answer');
console.log(person3)

console.log('--------------------New Address----------------------');
let directionNew = new Direction('One', 37, 9, 'B', '23345h', 'Mostoles', 'Madrid');


let personas = [person1, person2, person3]
// TODO: Set dni to look  for
let dni = '12345678h'
let person = personas.find(x => x.checkID(dni))
person?.directions.push(directionNew)

console.log(person?.toString())
