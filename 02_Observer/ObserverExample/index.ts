import { LCDObserver, PhoneObserver } from "./observers";
import {WeatherObservable} from "./WeatherObservable"

const weatherObservable = new WeatherObservable();
const phoneObserver = new PhoneObserver(weatherObservable);
const lcdObserver = new LCDObserver(weatherObservable);

weatherObservable.add(phoneObserver);
weatherObservable.add(lcdObserver);

weatherObservable.notify();
weatherObservable.value = 24;
