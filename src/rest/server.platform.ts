import { Container } from "typedi";
import { InjectorService, PlatformApplication } from "@tsed/common";
import { Configuration, Inject } from "@tsed/di";
import "@tsed/platform-express";
import bodyParser from "body-parser";
import "./pipes/class-validation.pipe";
export const rootDir = __dirname;

@Configuration({
    rootDir,
    acceptMimes: ["application/json"],
    httpPort: process.env.PORT || 8080,
    httpsPort: false, // CHANGE
    mount: {
        "/api": [`${rootDir}/controllers/**/*.ts`]
    },
    resolvers: [Container]
})
export class Server {
    @Inject()
    app: PlatformApplication;

    @Configuration()
    settings: Configuration;

    @Inject()
    injector: InjectorService;

    $beforeRoutesInit(): void {
        this.app.use(bodyParser.json()).use(
            bodyParser.urlencoded({
                extended: true
            })
        );
    }
}
