import axios from 'axios';
import Api from './index';
import { getConfig } from '../config';

/**
 * Error response data
 */
export interface ErrorResponseData {
  code?: number;
  message?: string;
  error?: string;
  error_description?: string;
}

/**
 * Error Response
 * modify axios error response
 */
export class ErrorResponse extends Error {
  public data: ErrorResponseData;

  /**
   * Error response constructor
   * @param err
   */
  constructor(err: any) {
    super(err.message);
    this.data = err.response.data;
  }
}

class BaseRequest {
  public static post = async (url: string, body: {[key: string]: any}): Promise<any> => {
    try {
      const response = await axios.post(`${getConfig().BASE_URL}${url}`, body, {
        headers: {
          authorization: `${Api.oauthResponse.token_type} ${Api.oauthResponse.access_token}`,
        },
      });
      return response.data;
    } catch (err) {
      if (err.response.status === 401) {
        await Api.initialize(Api.apiConfig);
        return await this.post(url, body);
      } else {
        throw new ErrorResponse(err);
      }
    }
  };
}

export default BaseRequest;
