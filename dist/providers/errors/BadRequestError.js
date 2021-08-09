"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
var ServerTypes_1 = require("../../types/ServerTypes");
var ApplicationError_1 = require("./ApplicationError");
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        var _this = _super.call(this, message, ServerTypes_1.HttpStatus.BadRequest) || this;
        _this.error = BadRequestError.name;
        return _this;
    }
    return BadRequestError;
}(ApplicationError_1.ApplicationError));
exports.BadRequestError = BadRequestError;