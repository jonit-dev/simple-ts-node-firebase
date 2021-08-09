"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Created"] = 201] = "Created";
    HttpStatus[HttpStatus["PermanentRedirect"] = 301] = "PermanentRedirect";
    HttpStatus[HttpStatus["TemporaryRedirect"] = 302] = "TemporaryRedirect";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["Forbidden"] = 403] = "Forbidden";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatus[HttpStatus["Conflict"] = 409] = "Conflict";
    HttpStatus[HttpStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
    HttpStatus[HttpStatus["ServiceUnavailable"] = 503] = "ServiceUnavailable";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
