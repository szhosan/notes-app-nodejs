import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";
require("dotenv").config();

import { IService } from "../types/serves";
import { controllers } from "app/domain";

const { PORT } = process.env;

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
      server.listen(PORT, () => {
        console.log(`TCP service started on port ${PORT}`);
        return resolve(true);
      });
    });
  }
}
