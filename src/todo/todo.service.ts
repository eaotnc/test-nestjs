import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return [1, 2, 3];
  }

  createTodo(title: string, subtitle: string) {
    return `Create todo ${title}: ${subtitle}`;
  }

  deleteTodo(id: string) {
    return 'Delete todo';
  }
}
