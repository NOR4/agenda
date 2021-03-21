export class Telephone {
    private _kind: string;
  
    private _numero: number;
    

    constructor(kind: string, numero: number) {
        this._kind = kind;
        this._numero = numero;
    }

    public get kind(): string {
        return this._kind;
    }
    public set kind(value: string) {
        this._kind = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public toString(): string{
        return `
- kind:  ${this.kind} 
  numero: ${this.numero}`
    }
   
}