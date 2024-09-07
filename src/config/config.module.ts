import { Global, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import * as path from 'path';

@Global()
@Module({
    providers: [
        {
            provide: ConfigModule,
            useValue: new ConfigService(path.join(__dirname, '..', '..', `./.env`)),
        }
    ],
    exports: [ConfigService]
})
export class ConfigModule {}