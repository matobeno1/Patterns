import { EnemyFactory } from "./EnemyFactory"

const factory = new EnemyFactory();
console.log("Main")

for (let i = 0; i < 5; i++) {
    const enemy = factory.createEnemy();
    console.log(enemy.getName(), "with health:", enemy.getHealth());
    5
}