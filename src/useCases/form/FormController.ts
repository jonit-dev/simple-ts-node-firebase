import express from "express";

import { HttpStatus } from "../../types/ServerTypes";
import { viewFormUseCase } from "./ViewFormUseCase";

const formRouter = express.Router();

formRouter.get("/form/countries", (req, res) => {
  const countries = viewFormUseCase.readCountries();
  return res.status(HttpStatus.OK).send(countries);
});

formRouter.get("/form/languages", (req, res) => {
  const languages = viewFormUseCase.readLanguages();

  return res.status(HttpStatus.OK).send(languages);
});

formRouter.get("/form/industries", (req, res) => {
  const industries = viewFormUseCase.readIndustries();
  return res.status(HttpStatus.OK).send(industries);
});

export { formRouter };
