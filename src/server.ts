import "express-async-errors";
import "reflect-metadata";

import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "inversify/controllerContainers";
import logger from "morgan";

import { errorHandlerMiddleware } from "./providers/middlewares/ErrorHandlerMiddleware";

const port = process.env.PORT || 5000;

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  // Middlewares ========================================

  app.use(logger("dev"));
  app.use(cors());
  app.use(compression());
  app.use(express.json());

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 150, // limit each IP to 100 requests per windowMs
  });

  app.use(limiter);

  app.use(errorHandlerMiddleware); //! MUST be at the end
});

let app = server.build();

app.listen(port, () => {
  console.log(`⚙️ Server running on port ${port}`);
});
