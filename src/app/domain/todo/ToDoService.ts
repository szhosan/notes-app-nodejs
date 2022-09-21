import calculateTodoListStats from "./calculateStatistics";
import { IToDo, IToDoStat } from "./ToDoTypes";
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

  async getById(id: string): Promise<IToDo | null> {
    const person = store.find((item) => {
      return item.id === id;
    });

    return person || null;
  }

  async deleteById(id: string): Promise<IToDo | null> {
    const idx = store.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    const [removedToDo] = store.splice(idx, 1);

    return removedToDo;
  }

  async updateById(id: string, data: IToDo): Promise<IToDo | null> {
    const idToUpdate = store.findIndex((item) => item.id === id);
    if (idToUpdate === -1) {
      return null;
    }
    store[idToUpdate] = { ...data };

    return store[idToUpdate];
  }

  async getStat(): Promise<IToDoStat[]> {
    const result = calculateTodoListStats(store);
    return result;
  }
}
