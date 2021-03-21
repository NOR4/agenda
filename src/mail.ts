export class Mail {
    private _kind: string;
   
    private _direction: string;
  

    constructor(kind: string, direction: string) {
        this._kind = kind;
        this._direction = direction;
    }

    public get kind(): string {
        return this._kind;
    }
    public set kind(value: string) {
        this._kind = value;
    }

    public get direction(): string {
        return this._direction;
    }
    public set direction(value: string) {
        this._direction = value;
    }

    public toString(): string{
        return `
- kind:  ${this.kind} 
  direcction: ${this.direction}`
    }
}