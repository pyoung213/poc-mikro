import { MongoDriver, MongoEntityManager } from "@mikro-orm/mongodb";
import { OrganizationRepository } from "./../database/repositories/organization.repository";
import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { entities } from "../database/entities";
import { OrganizationResolver } from "./resolvers/organization/organization.resolver";
import { Container } from "typedi";
import { registerRepositories } from "./utils/registerRepositories.utils";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { repositories } from "../database/repositories";

export class Application {
    private orm: MikroORM<MongoDriver>;

    public connect = async (): Promise<void> => {
        try {
            this.orm = await MikroORM.init<MongoDriver>({
                type: "mongo",
                dbName: "test",
                user: "root",
                password: "rootpassword",
                clientUrl: "mongodb://localhost/",
                entities,
                metadataProvider: TsMorphMetadataProvider,
                ensureIndexes: true // change this
            });

            registerRepositories(repositories, this.orm);
        } catch (error) {
            console.error("Could not connect to the database", error);
            throw Error(error);
        }
    };

    public init = async (): Promise<void> => {
        const schema = await buildSchema({
            resolvers: [OrganizationResolver],
            container: Container
        });

        const server = new ApolloServer({ schema });

        // The `listen` method launches a web server.
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    };
}
