import { IEnemy } from "./IEnemy";

export class SkeletonEnemy implements IEnemy {
    getHealth() {
        return 50;
    }
    getName() {
        return "Skeleton";
    }
}

export class GhostEnemy implements IEnemy {
    getHealth() {
        return 80;
    }
    getName() {
        return "Ghost";
    }
}