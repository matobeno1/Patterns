import { IEnemy } from "./IEnemy";

export interface IFactory {
    createEnemy(): IEnemy
}