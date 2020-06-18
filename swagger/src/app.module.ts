import { Module } from '@nestjs/common';
import { UserModule } from './wemo/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
