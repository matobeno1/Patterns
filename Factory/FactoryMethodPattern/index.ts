import { EnemyFactory } from "./EnemyFactory"

const factory = new EnemyFactory();

for (let i = 0; i < 5; i++) {
    const enemy = factory.createEnemy();
    console.log(enemy.getName(), "with health:", enemy.getHealth());
}