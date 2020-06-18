import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly UserName: string;

  @IsString()
  readonly Password: string;
}
