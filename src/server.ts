import "../src/providers/helpers/Firebase.helper";

import express from "express";

import { serverRouter } from "./resources/server/server.routes";
import { firebaseHelper } from "../src/providers/helpers/Firebase.helper";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares ========================================

app.use(serverRouter);

const server = app.listen(port, () => {
  console.log(`⚙️ Server running on port ${port}`);

  firebaseHelper.init();
});
