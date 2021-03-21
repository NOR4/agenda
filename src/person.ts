import {Direction} from './direction';
import {Mail} from './mail';
import { Telephone } from './phone';

export class Person {
    //properties
    private _name: string;
    private _surname: string;  
    private _age: number;  
    private _nin: string;
    private _birthday: Date;
    private _favColor: string;    
    private _gender: string;   
    private _directions: Direction;  
    private _mails: Mail;
    private _telephones: Telephone;
    private _notes: string;
   
    /*Llamo a los parámetros de la misma manera que a los atributos porque considero que
     de esta manera el código es más claro y sencillo para trabajar. 
     */
    //constructors
    constructor (name: string,
                 surname: string,
                 age: number,
                 nin: string,
                 birthday: Date,
                 favColor: string,
                 gender: string,
                 directions: Direction,
                 mails: Mail,
                 telephones: Telephone,
                 notes: string) {

                this._name = name;
                this._surname = surname;
                this._age = age;
                this._nin =nin;
                this._birthday = birthday;
                this._favColor = favColor;
                this._gender = gender;
                this._directions = directions;
                this._mails = mails;
                this._telephones = telephones;
                this._notes = notes
                 }
    //getters/setters
    public set name (name:string){
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public get surname(): string {
        return this._surname;
    }
    public set surname(value: string) {
        this._surname = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    // DNI no tiene método set porque,al igual que la matrícula del coche, no debe ser modificado
    public get nin(): string {
        return this._nin;
    }

    public get birthday(): Date {
        return this._birthday;
    }
    public set birthday(value: Date) {
        this._birthday = value;
    }

    public get favColor(): string {
        return this._favColor;
    }
    public set favColor(value: string) {
        this._favColor = value;
    }

    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }

    public get directions(): Direction {
        return this._directions;
    }
    public set directions(value: Direction) {
        this._directions= value;
    }
    public get mails(): Mail {
        return this._mails;
    }
    public set mails(value: Mail) {
        this._mails = value;
    }

    public get telephones(): Telephone {
        return this._telephones;
    }
    public set telephones(value: Telephone) {
        this._telephones = value;
    }

    public get notes(): string {
        return this._notes;
    }
    public set notes(value: string) {
        this._notes = value;
    }

    public checkID (dni:string) {
        return this.nin == dni;
    } 

    
  
}

