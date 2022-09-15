/**
 * Error responses
 */
export { ErrorResponse, ErrorResponseData } from './api/request';
/**
 * All Api functions
 * Eg: import { Api } from '@axinom/sdk'
 */
export * as Api from './api';
/**
 * Supported environment types. which is 'development' and 'production'
 */
export declare type Env = 'development' | 'production';
/**
 * Initialization params for the SDK
 */
export interface InitializeParams {
    env: Env;
    clientId: string;
    clientSecret: string;
}
/**
 * Default exported class when imported like 'import axinomSDK from @axinom/sdk'
 */
declare class Main {
    /**
     * Initialize SDK. this need be call before use the sdk.
     * @param params
     */
    static initialize: (params: InitializeParams) => Promise<void>;
}
export default Main;
