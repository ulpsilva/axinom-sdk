import { Env } from '../index';
export * from './store';
export interface OauthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    _id: string;
    clientId: string;
    userId: string;
}
export interface ApiInitializeParams {
    env: Env;
    clientId: string;
    clientSecret: string;
}
declare class Api {
    static oauthResponse: OauthResponse;
    static apiConfig: ApiInitializeParams;
    static initialize: (config: ApiInitializeParams) => Promise<void>;
}
export default Api;
