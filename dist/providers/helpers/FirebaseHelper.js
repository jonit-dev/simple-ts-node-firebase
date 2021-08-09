"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseHelper = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var firebase_service_account_key_json_1 = __importDefault(require("../data/firebase-service-account-key.json"));
var FirebaseHelper = /** @class */ (function () {
    function FirebaseHelper() {
        this.admin = firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(firebase_service_account_key_json_1.default),
        });
        this.db = firebase_admin_1.default.firestore();
    }
    return FirebaseHelper;
}());
var firebaseHelper = new FirebaseHelper();
exports.firebaseHelper = firebaseHelper;
