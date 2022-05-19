import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import fetch from 'node-fetch';

const URL = 'https://gorest.co.in/public/v2';
const myHeaders = new fetch.Headers({
  'Accept' :' application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer b446666f3fabad3874b0d783c6969bcad70c656fb2abd1a06a14300ee1f49f98'
});

@Injectable()
export class UserService {

  async create(createUserDto: CreateUserDto) {
    try{
    const response = await fetch(`${URL}/users`, {
    method: 'POST', 
    body: JSON.stringify(createUserDto), 
    headers: myHeaders 
  });
    const data = await response.json();
    return data;
      }catch(error){
        console.error(error.message)
        throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
      }
  }

  async findAll() {
    try{
    const response = await fetch(`${URL}/users`,{
      method: 'GET',
      headers: myHeaders 
    });
    const dados = await response.json();
    return dados;
  }catch(error){
    console.error(error.message)
    throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
  }
  }

  async findOne(id: number) {
    try{
    const response = await fetch(`${URL}/users/${id}`,{
    method: 'GET',
    headers: myHeaders 
  });
    const dados = await response.json();
    return dados;
    } catch(error){
      console.error(error.message)
      throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
    }
  }

}
