import { IToDo } from "./ToDoTypes";
const items = require("./prepopulation.json");

const store: IToDo[] = items;

export default class ToDoService {
  async add(data: IToDo): Promise<true> {
    store.push(data);

    return true;
  }

  async getAll(): Promise<IToDo[]> {
    return store;
  }

  async getById(id: string): Promise<IToDo | {}> {
    const person = store.find((item) => {
      return item.id === id;
    });

    return person || {};
  }

  async deleteById(id: string): Promise<IToDo | {}> {
    const idx = store.findIndex((item) => item.id === id);
    if (idx === -1) {
      return {};
    }
    const [removedToDo] = store.splice(idx, 1);

    return removedToDo;
  }
}
