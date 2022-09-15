import axios from 'axios';
import { getConfig, setConfig } from '../config';
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

class Api {
  public static oauthResponse: OauthResponse;
  public static apiConfig: ApiInitializeParams;

  public static initialize = async (config: ApiInitializeParams) => {
    setConfig(config.env);
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', config.clientId);
    params.append('client_secret', config.clientSecret);
    const response = await axios.post(
      `${getConfig().BASE_URL}/oauth/token`,
      params
    );
    if (response.status === 200) {
      this.oauthResponse = response.data;
      this.apiConfig = config;
    }
  };
}

export default Api;
