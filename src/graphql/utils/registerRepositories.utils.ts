import { MikroORM } from "@mikro-orm/core";
import { MongoDriver } from "@mikro-orm/mongodb";
import Container from "typedi";

type Class = { new (...args: any[]): any };

export function registerRepositories(repositories: Class[], orm: MikroORM<MongoDriver>) {
    repositories.forEach((Repository) => {
        Container.set(Repository, new Repository(orm.em));
    });
}
