import {IObservable, IObserver} from "./types";

const makeId = () => (
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
);

export class PhoneObserver implements IObserver {
    private _id: string = makeId();
    private _observable: IObservable;

    constructor(observable: IObservable) {
        this._observable = observable;
    }

    id(): string {
        return this._id;
    }

    update(): void {
        console.log(`Phone shows: ${this._observable.value}`)
    }
}

export class LCDObserver implements IObserver {
    private _id: string = makeId();
    private _observable: IObservable;

    constructor(observable: IObservable) {
        this._observable = observable;
    }

    id(): string {
        return this._id;
    }

    update(): void {
        console.log(`LCD shows: ${this._observable.value}`)
    }
}
