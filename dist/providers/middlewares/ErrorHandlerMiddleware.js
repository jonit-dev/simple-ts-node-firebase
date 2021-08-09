"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var errorHandlerMiddleware = function (err, req, res, next) {
    console.log(err.stack);
    if (err.statusCode) {
        return res.status(err.statusCode).send(err);
    }
    next();
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
