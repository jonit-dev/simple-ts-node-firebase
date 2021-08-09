"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverRouter = void 0;
var express_1 = __importDefault(require("express"));
var ServerTypes_1 = require("../../types/ServerTypes");
var serverRouter = express_1.default.Router();
exports.serverRouter = serverRouter;
serverRouter.get("/", function (req, res) {
    return res.status(ServerTypes_1.HttpStatus.OK).send({
        status: "success",
        message: "Server is running!",
    });
});
