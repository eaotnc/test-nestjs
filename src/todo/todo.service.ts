import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv3 } from 'uuid';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  createTodo(title: string, subtitle: string) {
    const todo = new Todo();
    todo.id = uuidv3();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todos.push(todo);
    return `Create todo ${title}: ${subtitle}`;
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return `Delete todo ${id}`;
  }
}
