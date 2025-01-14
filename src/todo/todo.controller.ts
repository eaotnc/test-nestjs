import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    return this.todoService.createTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
