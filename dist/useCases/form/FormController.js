"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formRouter = void 0;
var express_1 = __importDefault(require("express"));
var ServerTypes_1 = require("../../types/ServerTypes");
var ViewFormUseCase_1 = require("./ViewFormUseCase");
var formRouter = express_1.default.Router();
exports.formRouter = formRouter;
formRouter.get("/form/countries", function (req, res) {
    var countries = ViewFormUseCase_1.viewFormUseCase.readCountries();
    return res.status(ServerTypes_1.HttpStatus.OK).send(countries);
});
formRouter.get("/form/languages", function (req, res) {
    var languages = ViewFormUseCase_1.viewFormUseCase.readLanguages();
    return res.status(ServerTypes_1.HttpStatus.OK).send(languages);
});
formRouter.get("/form/industries", function (req, res) {
    var industries = ViewFormUseCase_1.viewFormUseCase.readIndustries();
    return res.status(ServerTypes_1.HttpStatus.OK).send(industries);
});
