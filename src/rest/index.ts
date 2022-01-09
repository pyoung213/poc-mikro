import { MikroORM } from "@mikro-orm/core";
import { MongoDriver } from "@mikro-orm/mongodb";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { entities } from "../database/entities";
import { repositories } from "../database/repositories";
import { registerRepositories } from "../graphql/utils/registerRepositories.utils";
import { Server } from "./server.platform";

async function bootstrapMikro() {
    const orm = await MikroORM.init<MongoDriver>({
        type: "mongo",
        dbName: "test",
        user: "root",
        password: "rootpassword",
        clientUrl: "mongodb://localhost/",
        entities,
        metadataProvider: TsMorphMetadataProvider,
        ensureIndexes: true // change this
    });

    registerRepositories(repositories, orm);
}

async function bootstrap() {
    try {
        $log.debug("Start server...");

        await bootstrapMikro();
        const platform = await PlatformExpress.bootstrap(Server);

        await platform.listen();
        $log.debug("Server initialized");
    } catch (er) {
        $log.error(er);
    }
}

bootstrap();
