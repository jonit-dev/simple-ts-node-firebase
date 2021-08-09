import express from "express";

import { HttpStatus } from "../../types/ServerTypes";

const serverRouter = express.Router();

serverRouter.get("/", (req, res) => {
  return res.status(HttpStatus.OK).send({
    status: "success",
    message: "Server is running!",
  });
});

export { serverRouter };
