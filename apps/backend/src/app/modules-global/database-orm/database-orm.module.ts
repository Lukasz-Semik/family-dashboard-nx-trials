import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

import { EnvService } from '../env/env.service';

export function DatabaseOrmModule(): DynamicModule {
  const envService = new EnvService();
  const config = envService.read();

  return TypeOrmModule.forRoot({
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
    // Temp always sync
    // synchronize: envService.isTest(),
    synchronize: true,
    logging: envService.isDev(),
    migrations: [__dirname + 'apps/backend/migrations/**/*{.ts,.js}'],
  });
}
