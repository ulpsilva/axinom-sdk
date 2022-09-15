/**
 * Store Api functions
 */
export declare class Store {
    protected url: string;
    /**
     * Save Api functions
     */
    save: (data: {
        files: Array<{
            name: string;
            dir: boolean;
            date: string;
        }>;
    }) => Promise<any>;
}
export declare const store: Store;
