"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyBDmi6nYFsGPCemtjbkBqTzQYGgCHuDdBs",
    authDomain: "firestore-test-d2480.firebaseapp.com",
    projectId: "firestore-test-d2480",
    storageBucket: "firestore-test-d2480.appspot.com",
    messagingSenderId: "668685129831",
    appId: "1:668685129831:web:a992cc8c6393dee2cadcc2",
    measurementId: "G-MCLHKEZHXJ",
};
// Initialize Firebase
if (!app_1.default.apps.length) {
    app_1.default.initializeApp(firebaseConfig);
}
exports.default = app_1.default;
