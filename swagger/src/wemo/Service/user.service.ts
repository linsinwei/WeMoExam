import { Injectable,Inject } from '@nestjs/common';
import { User } from '../classes/user.class';
import { CreateUserDto } from '../dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor( @Inject('UsersRepository') private readonly wemoUserRepository: Model<User>) { }

  async create(user: CreateUserDto): Promise<any>  {

    var userInfo = await this.wemoUserRepository.findOne(user).exec();
    if (userInfo === null)     
      return await this.wemoUserRepository.create(user); 
    else
      return false; 
  }

  async login(user: CreateUserDto): Promise<any>  {   
    
    var userInfo = await this.wemoUserRepository.findOne(user).exec();
    if (userInfo === null)
    {
      return false;
    }
    if (userInfo.Password === user.Password){
      return true;
    }
    else{
      return false;
    }
  }
}
