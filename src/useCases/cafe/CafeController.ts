import express from "express";

import { isAuthenticated } from "../../providers/middlewares/AuthMiddleware";
import { viewCafeUseCase } from "./ViewCafeUseCase";

const cafeRouter = express.Router();

cafeRouter.get("/cafes", isAuthenticated, async (req, res) => {
  return await viewCafeUseCase.readAll();
});

export { cafeRouter };
