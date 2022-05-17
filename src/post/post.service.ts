import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import fetch from 'node-fetch'

const URL = 'https://gorest.co.in/public/v2';
const myHeaders = new fetch.Headers({
  'Accept' :' application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer b446666f3fabad3874b0d783c6969bcad70c656fb2abd1a06a14300ee1f49f98'
});

@Injectable()
export class PostService {
  async create(createPostDto: CreatePostDto) {
    const response = await fetch(`${URL}/posts`, {
      method: 'POST', 
      body: JSON.stringify(createPostDto), 
      headers: myHeaders 
    });
      const data = await response.json();
      return data;
  }

  async findAll() {
    const response = await fetch(`${URL}/posts`, {
      method: 'GET',
      headers: myHeaders
    });
    const data = await response.json();
    return data;
  }

  async findOne(id: number) {
    const response = await fetch(`${URL}/posts/${id}`, {
      method: 'GET',
      headers: myHeaders
    });
    const data = await response.json();
    return data;

  }

}
