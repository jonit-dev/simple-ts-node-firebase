import express from "express";

import { isAuthenticated } from "../../providers/middlewares/AuthMiddleware";
import { viewCafeUseCase } from "../../useCases/cafe/view/ViewCafeUseCase";

const cafeRouter = express.Router();

cafeRouter.get("/cafes", isAuthenticated, async (req, res) =>
  viewCafeUseCase.readAll(req, res)
);

export { cafeRouter };
