"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewFormUseCase = void 0;
var countries_json_1 = __importDefault(require("../../providers/data/countries.json"));
var ViewFormUseCase = /** @class */ (function () {
    function ViewFormUseCase() {
    }
    ViewFormUseCase.prototype.readCountries = function () {
        return countries_json_1.default;
    };
    return ViewFormUseCase;
}());
var viewFormUseCase = new ViewFormUseCase();
exports.viewFormUseCase = viewFormUseCase;
