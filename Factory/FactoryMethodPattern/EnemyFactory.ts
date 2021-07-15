import { IFactory } from "./IEnemyFactory";
import { GhostEnemy, SkeletonEnemy } from "./Enemy"

export class EnemyFactory implements IFactory {
    createEnemy() {
        const randomNumber = Math.round(Math.random() * 10) % 2;
        return randomNumber % 2 ? new GhostEnemy : new SkeletonEnemy
    }
}