import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 'Jacky', description: 'The name of the User' })
  UserName: string;

  @ApiProperty({ example: 123456, description: 'The password of the User' })
  Password: string;
}
