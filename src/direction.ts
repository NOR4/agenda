import prompt = require("prompt")

export class Direction {
    private _street: string;

    private _number: number;

    private _floor: number;

    private _letter: string;

    private _postalCode: string;

    private _town: string;

    private _county: string;


    constructor(street: string,
        number: number,
        floor: number,
        letter: string,
        postalCode: string,
        town: string,
        county: string, ) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._letter = letter;
        this._postalCode = postalCode;
        this._town = town;
        this._county = county
    }

    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }

    public get number(): number {
        return this._number;
    }
    public set number(value: number) {
        this._number = value;
    }

    public get floor(): number {
        return this._floor;
    }
    public set floor(value: number) {
        this._floor = value;
    }

    public get postalCode(): string {
        return this._postalCode;
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }

    public get letter(): string {
        return this._letter;
    }
    public set letter(value: string) {
        this._letter = value;
    }

    public get town(): string {
        return this._town;
    }
    public set town(value: string) {
        this._town = value;
    }

    public get county(): string {
        return this._county;
    }
    public set county(value: string) {
        this._county = value;
    }

    public async getDataFromConsole() {
        prompt.start();

        const {street,
            number,
            floor,
            letter,
            postalCode,
            town,
            county} = await prompt.get(Object.getOwnPropertyNames(this));
                this.street=street
            }
        

    }

}