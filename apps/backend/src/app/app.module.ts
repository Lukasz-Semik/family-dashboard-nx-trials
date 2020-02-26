import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { EnvsModule } from './modules-global/env/env.module';
import { DatabaseOrmModule } from './modules-global/database-orm/database-orm.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [EnvsModule, DatabaseOrmModule(), UserModule],
  controllers: [AppController],
})
export class AppModule {}
