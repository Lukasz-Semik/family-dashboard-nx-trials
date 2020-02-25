import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

import { AppController } from './app.controller';
import { EnvsModule } from './modules-global/env/env.module';
import { DatabaseOrmModule } from './modules-global/database-orm/database-orm.module';

@Module({
  imports: [EnvsModule, DatabaseOrmModule()],
  controllers: [AppController],
})
export class AppModule {}
