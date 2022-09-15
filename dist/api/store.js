"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.Store = void 0;
const constants_1 = require("../constants");
const request_1 = __importDefault(require("./request"));
/**
 * Store Api functions
 */
class Store {
    constructor() {
        this.url = constants_1.API_URL.STORE;
        /**
         * Save Api functions
         */
        this.save = (data) => __awaiter(this, void 0, void 0, function* () {
            return yield request_1.default.post(this.url, data);
        });
    }
}
exports.Store = Store;
exports.store = new Store();
//# sourceMappingURL=store.js.map