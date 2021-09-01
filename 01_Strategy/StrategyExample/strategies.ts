export interface IQuackStrategy {
    quack(): void;
}

export interface IFlyStrategy {
    fly(): void;
}


export class ClassicFlyStrategy implements IFlyStrategy {
    public fly() {
        console.log("Duck is flying as usual.");
    }
}

export class SpecialFlyStrategy implements IFlyStrategy {
    public fly() {
        console.log("Duck is flying insanely fast.");
    }
}

export class ClassicQuackStrategy implements IQuackStrategy {
    public quack() {
        console.log("Duck is quacking as usual.");
    }
}

export class SpecialQuackStrategy implements IQuackStrategy {
    public quack() {
        console.log("Duck is quacking like crazy.");
    }
}