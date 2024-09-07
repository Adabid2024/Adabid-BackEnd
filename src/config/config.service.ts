import { Injectable, Logger } from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, string>;
    private readonly logger = new Logger(this.constructor.name);

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get getDatabaseConfig() {
        return {
            
        }
    }
}