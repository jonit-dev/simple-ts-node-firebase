import "express-async-errors";

import compression from "compression";
import cors from "cors";
import express from "express";
import logger from "morgan";

import { errorHandlerMiddleware } from "./providers/middlewares/ErrorHandlerMiddleware";
import { serverRouter } from "./resources/server/server.routes";
import { cafeRouter } from "./useCases/cafe/CafeController";
import { userRouter } from "./useCases/users/UserController";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares ========================================

app.use(logger("dev"));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(serverRouter);
app.use(cafeRouter);
app.use(userRouter);

const server = app.listen(port, () => {
  console.log(`⚙️ Server running on port ${port}`);
});

app.use(errorHandlerMiddleware); // MUST be at the end
