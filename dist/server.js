"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var ErrorHandlerMiddleware_1 = require("./providers/middlewares/ErrorHandlerMiddleware");
var CafeController_1 = require("./useCases/cafe/CafeController");
var UserController_1 = require("./useCases/users/UserController");
var app = express_1.default();
var port = process.env.PORT || 5000;
// Middlewares ========================================
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(compression_1.default());
app.use(express_1.default.json());
app.use(CafeController_1.cafeRouter);
app.use(UserController_1.userRouter);
app.listen(port, function () {
    console.log("\u2699\uFE0F Server running on port " + port);
});
app.use(ErrorHandlerMiddleware_1.errorHandlerMiddleware); // MUST be at the end
