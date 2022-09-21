import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { IService } from "../types/serves";
import { controllers } from "app/domain";

export class Tcp implements IService {
  private static instance: Tcp;

  private routePrefix = "/api";
  private server = express();
  constructor() {
    if (!Tcp.instance) {
      Tcp.instance = this;
    }
    return Tcp.instance;
  }
  async init() {
    const { server, routePrefix } = this;
    useExpressServer(server, {
      cors: true,
      routePrefix,
      defaultErrorHandler: true,
      controllers,
    });

    return new Promise<boolean>((resolve: any) => {
      server.listen(3001, () => {
        console.log("TCP service started on port 3000");
        return resolve(true);
      });
    });
  }
}
