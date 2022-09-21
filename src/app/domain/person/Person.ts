import { App } from "infra/App";
import { JsonController, Get } from "routing-controllers";

@JsonController()
export default class Person {
  public app = new App();

  @Get("/person/hello")
  async getHello() {
    return "Hello";
  }
}
