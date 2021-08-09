import express from "express";

import { isAuthenticated } from "../../providers/middlewares/AuthMiddleware";
import { HttpStatus } from "../../types/ServerTypes";
import { viewCafeUseCase } from "./ViewCafeUseCase";

const cafeRouter = express.Router();

cafeRouter.get("/cafe", isAuthenticated, async (req, res) => {
  const cafes = await viewCafeUseCase.readAll();

  return res.status(HttpStatus.OK).send(cafes);
});

export { cafeRouter };
