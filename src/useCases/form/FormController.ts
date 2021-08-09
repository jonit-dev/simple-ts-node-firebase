import express from "express";

import { HttpStatus } from "../../types/ServerTypes";
import { viewFormUseCase } from "./ViewFormUseCase";

const formRouter = express.Router();

formRouter.get("/form/countries", (req, res) => {
  const countries = viewFormUseCase.readCountries();
  return res.status(HttpStatus.OK).send(countries);
});

export { formRouter };
