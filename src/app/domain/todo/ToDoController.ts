import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  NotFoundError,
} from "routing-controllers";
import { App } from "../../../infra/App";
import ToDoService from "./ToDoService";

import { IToDo } from "./ToDoTypes";

@JsonController("/notes")
export default class ToDo {
  public app = new App();
  public service = new ToDoService();

  @Get("/stats")
  async stats() {
    return await this.service.getStat();
  }

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    const result = await this.service.getById(id);
    return result || new NotFoundError(`Note with id="${id}" was not found`);
  }

  @Post()
  //@UseBefore(validateBody)
  async add(@Body() body: IToDo) {
    console.log(body);

    await this.service.add(body);

    return "Success";
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    const result = await this.service.deleteById(id);
    return result || new NotFoundError(`Note with id="${id}" was not found`);
  }

  @Patch("/:id")
  async update(@Param("id") id: string, @Body() body: IToDo) {
    const result = await this.service.updateById(id, body);
    return result || new NotFoundError(`Note with id="${id}" was not found`);
  }
}
