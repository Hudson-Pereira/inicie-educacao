import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import fetch from 'node-fetch';

const URL = 'https://gorest.co.in/public/v2'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    const response = await fetch(`${URL}/users`);
    const dados = await response.json();
    console.log(dados)
    return dados;
  }

  async findOne(id: number) {
    const response = await fetch(`${URL}/users/${id}`);
    const dados = await response.json();
    console.log(dados)
    return dados;
  }

}
