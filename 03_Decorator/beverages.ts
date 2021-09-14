import { IBeverage } from "./types";

export class Beverage implements IBeverage {
    private _description: string = "";
    private _cost: number = 0;

    public get description(): string {
        return this._description;
    }

    public get cost(): number {
        return this._cost;
    }

}