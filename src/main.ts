import {Direction} from './direction';
import {Mail} from './mail';
import { Telephone } from './phone';
import {Person} from './person';
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
console.log('--------------------Iniciando programa----------------------');
let direction1 = new Direction('Sauces', 3, 4, 'B', '23345h', 'Móstoles', 'Madrid')
let mail1 = new Mail('trabajo','pepitoperez@hotmail.com')
let telephone1 = new Telephone('personal', 678678678 )
let person1 = new Person('Juan','Juno', 23,'12345678D', new Date(1990-5-14), 'yellow', 'no binary',
                         direction1, mail1, telephone1,'premium');
let direction2 = new Direction('Rosales', 28, 1, 'I', '30002', 'Avilés', 'Asturias');
let mail2 = new Mail('persoal','juanita@hotmail.com');
let telefono2 = new Telephone('personal', 666555777 );
let person2 = new Person('Juana','Juna', 32,'12345678x', new Date(1999-5-14), 'orange', 'female',
                          direction2, mail2, telefono2. ,'no premium');
                          
let direction3 = new Direction('Lilos', 37, 9, 'B', '23345h', 'Mostoles', 'Madrid');
let mail3 = new Mail('trabajo','pepitoperez@hotmail.com');
let telephone3 = new Telephone('personal', 666666666 );
let person3 = new Person('Pepe','Gómez', 89,'12345678h', new Date(1930-7-24), 'blue', 'male',
                         direction3 , mail3, telephone3,'no answer');

                          
let personas = [person1, person2, person3]
rl.question('DNI? ', async (answer) => {
    // TODO: Log the answer in a database
    
    let dni = answer
    let person = personas.find(x => x.checkID(dni))
    rl.close()
    if (person) {

        let direccion1 = new Direction('', 3, 4, '', '', '', '')
        await direccion1.getDataFromConsole()
        let mail1 = new Mail('trabajo','pepitodsfperez@hotmail.com')
        let telefono1 = new Telephone('personal', 678673678 )
        person.mails = mail1
        person.directions = direccion1
        person.telephones = telefono1
        console.log(person.directions.street)
    } else {
        console.log(`el dni ${answer} no existe`);
    }
    
});
