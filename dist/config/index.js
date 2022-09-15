"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.setConfig = void 0;
const config_json_1 = __importDefault(require("./config.json"));
let config;
const setConfig = (env) => {
    config = config_json_1.default[env];
};
exports.setConfig = setConfig;
const getConfig = () => {
    return config;
};
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map