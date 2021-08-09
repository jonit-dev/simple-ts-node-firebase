import "express-async-errors";

import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import logger from "morgan";

import { errorHandlerMiddleware } from "./providers/middlewares/ErrorHandlerMiddleware";
import { cafeRouter } from "./useCases/cafe/CafeController";
import { formRouter } from "./useCases/form/FormController";
import { userRouter } from "./useCases/users/UserController";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares ========================================

app.use(logger("dev"));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(cafeRouter);
app.use(userRouter);
app.use(formRouter);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.listen(port, () => {
  console.log(`⚙️ Server running on port ${port}`);
});

app.use(errorHandlerMiddleware); //! MUST be at the end
