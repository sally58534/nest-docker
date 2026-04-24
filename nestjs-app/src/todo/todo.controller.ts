import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() dto: CreateTodoDto) {
    console.log("Adding new todo with description:", dto.description);
    console.debug("Received CreateTodoDto:", dto);
    console.error("This is a test error log for debugging purposes.");
    return this.todoService.create(dto);
  }
}
