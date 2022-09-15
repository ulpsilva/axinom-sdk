import { Env } from '../index';
interface Config {
    BASE_URL: string;
}
export declare const setConfig: (env: Env) => void;
export declare const getConfig: () => Config;
export {};
