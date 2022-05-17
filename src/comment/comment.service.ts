import { Injectable } from '@nestjs/common';
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
    const response = await fetch(`${URL}/comments`, {
      method: 'POST',
      body: JSON.stringify(createCommentDto), 
      headers: myHeaders 
    });
    const data = await response.json();
    return data;
  }

  async findAll() {
    const response = await fetch(`${URL}/comments`,{
      method: 'GET',
      headers: myHeaders 
    });
    const dados = await response.json();
    return dados;
  }

  async findOne(id: number) {
    const response = await fetch(`${URL}/comments/${id}`,{
      method: 'GET',
      headers: myHeaders 
    });
    const dados = await response.json();
    return dados;
  }

  async remove(id:number) {
    const response = await fetch(`${URL}/comments/${id}`, {
      method: 'DELETE',
      headers: myHeaders
    });
    return "Excluído com sucesso."
  }

}
