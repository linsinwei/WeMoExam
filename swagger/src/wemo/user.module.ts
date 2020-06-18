import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './Service/user.service';
import { databaseProviders } from './appLib/database.provider';
import { UsersProvider  } from './appLib/users.providers';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...databaseProviders,
    ...UsersProvider]
})
export class UserModule {}
