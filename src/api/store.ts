import { API_URL } from '../constants';
import BaseRequest from './request';

/**
 * Store Api functions
 */
export class Store {
  protected url = API_URL.STORE;

  /**
   * Save Api functions
   */
  public save = async (
      data: {
        files: Array<{
          name: string;
          dir: boolean;
          date: string;
        }>
      }
  ) => {
    return await BaseRequest.post(this.url, data);
  };
}
