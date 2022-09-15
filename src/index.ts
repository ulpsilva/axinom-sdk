import { setConfig } from './config';
import Api from './api';

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
export type Env = 'development' | 'production';

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
class Main {
  /**
   * Initialize SDK. this need be call before use the sdk.
   * @param params
   */
  public static initialize = async (params: InitializeParams) => {
    setConfig(params.env);
    await Api.initialize({
      env: params.env,
      clientId: params.clientId,
      clientSecret: params.clientSecret,
    });
  };
}

export default Main;
