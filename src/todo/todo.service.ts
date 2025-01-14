import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  getTodos() {
    return [1, 2, 3];
  }

  createTodo(title: string, subtitle: string) {
    const todo = new Todo();
    todo.id = 1;
    todo.title = title;
    todo.subtitle = subtitle;
    this.todos.push(todo);
    return `Create todo ${title}: ${subtitle}`;
  }

  deleteTodo(id: string) {
    return 'Delete todo';
  }
}
