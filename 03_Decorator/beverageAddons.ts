import { Beverage } from "./beverages";
import { IBeverage } from "./types";

type Constructor<T = {}> = new (...args: any[]) => T;
abstract class AddonDecorator extends Beverage {
    
}

// export function CaramelDecorator(beverage: Beverage) {
//     beverage.prototype.cost += 2;
// }

export function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }