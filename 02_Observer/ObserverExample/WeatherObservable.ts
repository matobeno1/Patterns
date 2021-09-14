import { IObservable, IObserver } from "./types";

interface IObserverMap {
    [id: string]: IObserver
}

export class WeatherObservable implements IObservable {
    private _temperature: number = 23;
    private _observers: IObserverMap = {};

    add(observer: IObserver): void {
        throw new Error("Method not implemented.");
    }
    remove(observer: IObserver): void {
        throw new Error("Method not implemented.");
    }
    notify(): void {
        throw new Error("Method not implemented.");
    }
    
    public get value(): number {
        return this._temperature;
    }

    public set value(value: number) {
        this._temperature = value;
    }
}