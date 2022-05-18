import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

describe('CommentController', () => {
  let controller: CommentController;
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [CommentService],
    }).compile();

    controller = module.get<CommentController>(CommentController);
    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create a comment for the post', () => {
    it('should create a comment for a post existing', async () => {
      const result = ['test'];
      jest.spyOn(service, 'create').mockImplementation(async () => result);

      expect(await controller.create({
        post_id: 1268,
        name: "testing",
        email: "testin@test.com",
        body: "testing this controller"
      })).toBe(result);
    });
  });
  describe('find all comments in the public list', () => {
    it('should return an array of comments', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('find a comment defined by ID', () => {
    it('should return unique comment', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findOne').mockImplementation(async () => result);

      expect(await controller.findOne('1262')).toBe(result);
    });
  });

  describe('delete a comment defined by ID', () => {
    it('should delete a comment of a post existing', async () => {
      const result = 'test';
      jest.spyOn(service, 'remove').mockImplementation(async () => result);

      expect(await controller.remove('1297')).toBe(result)
    });
  });

});
