import { IObservable, IObserver } from "./types";

interface IObserverMap {
    [id: string]: IObserver
}

export class WeatherObservable implements IObservable {
    private _temperature: number = 23;
    private _observers: IObserverMap = {};

    add(observer: IObserver): void {
        this._observers[observer.id] = observer;
    }
    remove(observer: IObserver): void {
        delete this._observers[observer.id]
    }
    notify(): void {
        Object.keys(this._observers).forEach((observerId: string) => {
            this._observers[observerId].update();
        })
    }

    public get value(): number {
        return this._temperature;
    }

    public set value(value: number) {
        this._temperature = value;
        this.notify();
    }
}