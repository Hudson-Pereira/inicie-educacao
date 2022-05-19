import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import fetch from 'node-fetch'

const URL = 'https://gorest.co.in/public/v2';
const myHeaders = new fetch.Headers({
  'Accept' :' application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer b446666f3fabad3874b0d783c6969bcad70c656fb2abd1a06a14300ee1f49f98'
});

@Injectable()
export class CommentService {

  async create(createCommentDto: CreateCommentDto) {
    try{
      const response = await fetch(`${URL}/comments`, {
      method: 'POST',
      body: JSON.stringify(createCommentDto), 
      headers: myHeaders 
    });
    
    const data = await response.json();
    return data;
  } catch(error){
    console.error(error.message)
    throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
  }
  }

  async findAll() {
    try {
      const response = await fetch(`${URL}/comments`,{
      method: 'GET',
      headers: myHeaders 
    });
    const dados = await response.json();
    if(dados.length === 0 ){
      throw new HttpException('Nenhum item encontrado.', HttpStatus.NOT_FOUND)
    }
    return dados;
  } catch(error){
    console.error(error.message)
    throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
  }
  }

  async findOne(id: number) {
    try{
    const response = await fetch(`${URL}/comments/${id}`,{
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

  async remove(id:number) {
    try{
    const response = await fetch(`${URL}/comments/${id}`, {
      method: 'DELETE',
      headers: myHeaders
    });
    return "Excluído com sucesso."
  }catch(error){
    console.error(error.message)
    throw new HttpException('Tente novamente.', HttpStatus.BAD_REQUEST)
  }
  }

}
