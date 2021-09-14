import { IBeverage } from "./types";
export abstract class Beverage implements IBeverage {
    protected _description: string = "";
    protected _cost: number = 0;

    public get description(): string {
        return this._description;
    }

    public get cost(): number {
        return this._cost;
    }

    public logDescription(): void {
        console.log(`The ${this.description} costs ${this._cost}€`)
    }

}

export class Espresso extends Beverage {
    protected _description: string = "Espresso";
    protected _cost: number = 1.2;
}