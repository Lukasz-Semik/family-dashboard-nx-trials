import { Module } from '@nestjs/common';

import { EnvsModule } from './modules-global/env/env.module';
import { DatabaseOrmModule } from './modules-global/database-orm/database-orm.module';
import { UserModule } from './modules/user/user.module';
import { MailsModule } from './modules-global/mails/mails.module';
import { TokenModule } from './modules-global/token/token.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [EnvsModule, TokenModule, MailsModule, DatabaseOrmModule(), UserModule, AuthModule],
})
export class AppModule {}
