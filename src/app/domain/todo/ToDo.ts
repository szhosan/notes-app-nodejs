import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from "routing-controllers";
import { App } from "../../../infra/App";
import ToDoService from "./ToDoService";

import { IToDo } from "./ToDoTypes";

@JsonController("/notes")
export default class Person {
  public app = new App();
  public service = new ToDoService();

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return this.service.getById(id);
  }

  @Post()
  async add(@Body() body: IToDo) {
    await this.service.add(body);

    return "Success";
  }

  @Delete("/id")
  async delete(@Param("id") id: string) {
    return this.service.deleteById(id);
  }
}
