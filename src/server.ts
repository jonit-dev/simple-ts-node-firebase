import "express-async-errors";

import cors from "cors";
import express from "express";

import { errorHandlerMiddleware } from "./providers/middlewares/ErrorHandlerMiddleware";
import { cafeRouter } from "./resources/cafe/cafe.routes";
import { serverRouter } from "./resources/server/server.routes";
import { userRouter } from "./resources/users/users.routes";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares ========================================

app.use(cors());
app.use(express.json());
app.use(serverRouter);
app.use(cafeRouter);
app.use(userRouter);

const server = app.listen(port, () => {
  console.log(`⚙️ Server running on port ${port}`);
});

app.use(errorHandlerMiddleware); // MUST be at the end
