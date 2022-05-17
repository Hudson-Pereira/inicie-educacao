import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import fetch from 'node-fetch';

const URL = 'https://gorest.co.in/public/v2'

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const myHeaders = new fetch.Headers({
      'Content-Type': 'application/json',
      'Authorization': 'b446666f3fabad3874b0d783c6969bcad70c656fb2abd1a06a14300ee1f49f98'
  });
  TODO: colocar token de acesso, provavelmente, criar um user novo no site...
    const response = await fetch(`${URL}/users`, {
    method: 'POST', 
    body: JSON.stringify(createUserDto), 
    headers: myHeaders 
  });
    const data = await response.json();
    console.log(data)
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
