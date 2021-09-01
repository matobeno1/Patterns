import { Duck } from "./Duck";
import {
    ClassicFlyStrategy,
    ClassicQuackStrategy,
    SpecialFlyStrategy,
    SpecialQuackStrategy
} from "./strategies";

const classicFlyStrategy = new ClassicFlyStrategy;
const classicQuackStrategy = new ClassicQuackStrategy;

const specialFlyStrategy = new SpecialFlyStrategy;
const specialQuackStrategy = new SpecialQuackStrategy;

const duck = new Duck(classicFlyStrategy, classicQuackStrategy);
duck.fly();
duck.quack();
duck.replaceStrategy(specialFlyStrategy, specialQuackStrategy);
duck.fly();
duck.quack();