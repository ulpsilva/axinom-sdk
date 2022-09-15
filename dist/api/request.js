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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("./index"));
const config_1 = require("../config");
/**
 * Error Response
 * modify axios error response
 */
class ErrorResponse extends Error {
    /**
     * Error response constructor
     * @param err
     */
    constructor(err) {
        super(err.message);
        this.data = err.response.data;
    }
}
exports.ErrorResponse = ErrorResponse;
class BaseRequest {
}
_a = BaseRequest;
BaseRequest.post = (url, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${(0, config_1.getConfig)().BASE_URL}${url}`, body, {
            headers: {
                authorization: `${index_1.default.oauthResponse.token_type} ${index_1.default.oauthResponse.access_token}`,
            },
        });
        return response.data;
    }
    catch (err) {
        if (err.response.status === 401) {
            yield index_1.default.initialize(index_1.default.apiConfig);
            return yield _a.post(url, body);
        }
        else {
            throw new ErrorResponse(err);
        }
    }
});
exports.default = BaseRequest;
//# sourceMappingURL=request.js.map