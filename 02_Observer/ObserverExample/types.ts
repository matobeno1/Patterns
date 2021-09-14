
export interface IObservable {
    value: number;
    add(observer: IObserver): void;   
    remove(observer: IObserver): void;   
    notify(): void;
}

export interface IObserver {
    update(): void;
    /** Retrieves observer's unique ID. */
    id(): string;
}
