import { IFlyStrategy, IQuackStrategy } from "./strategies";

interface IDuck {
    fly(): void;
    quack(): void;
}

export class Duck implements IDuck {
    private _flyStrategy: IFlyStrategy;
    private _quackStrategy: IQuackStrategy;

    constructor(
        flyStrategy: IFlyStrategy,
        quackStrategy: IQuackStrategy
    ) {
        this._flyStrategy = flyStrategy;
        this._quackStrategy = quackStrategy;
    }

    public replaceStrategy(
        flyStrategy: IFlyStrategy,
        quackStrategy: IQuackStrategy
    ) {
        console.log("Replacing strategies.");
        this._flyStrategy = flyStrategy;
        this._quackStrategy = quackStrategy;
    }
    

    public fly(): void {
        this._flyStrategy.fly();
    }

    public quack(): void {
        this._quackStrategy.quack();
    }
}