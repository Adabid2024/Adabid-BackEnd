import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { MYSQL } from './constants/constants';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
    type: MYSQL,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATEBASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['dist/migration/*.js'],
    migrationsRun: true,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;