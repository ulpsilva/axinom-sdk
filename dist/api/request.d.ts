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
export declare class ErrorResponse extends Error {
    data: ErrorResponseData;
    /**
     * Error response constructor
     * @param err
     */
    constructor(err: any);
}
declare class BaseRequest {
    static post: (url: string, body: {
        [key: string]: any;
    }) => Promise<any>;
}
export default BaseRequest;
