import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './Service/user.service';
import { User } from './classes/user.class';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('user APIs')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async register(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return await this.userService.create(createUserDto);
  }

  @Post("login")
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return this.userService.login(createUserDto);
  }
}
