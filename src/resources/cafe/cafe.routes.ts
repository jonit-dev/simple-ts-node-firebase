import express from "express";

import { BadRequestError } from "../../providers/errors/BadRequestError";
import { readAllResources } from "../../providers/helpers/crud.helper";
import { HttpStatus } from "../../types/server.types";

const cafeRouter = express.Router();

cafeRouter.get("/cafes", async (req, res) => {
  try {
    const cafes = await readAllResources("cafes");

    return res.status(HttpStatus.OK).json(cafes);
  } catch (error) {
    console.error(error);

    throw new BadRequestError(error.message);
  }
});

export { cafeRouter };
